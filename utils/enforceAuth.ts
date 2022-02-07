import { GetServerSideProps } from 'next';
import { supabase } from './supabaseClient';

// https://dev.to/sruhleder/protected-routes-with-supabase-and-nextjs-381k

const enforceAuth: (inner?: GetServerSideProps) => GetServerSideProps = inner => {
    return async context => {
        const { req } = context;
        const { user } = await supabase.auth.api.getUserByCookie(req);

        if (!user) {
            return { props: {}, redirect: { destination: '/login' } };
        }

        if (inner) {
            return inner(context);
        }

        return { props: {} };
    };
};

export default enforceAuth;