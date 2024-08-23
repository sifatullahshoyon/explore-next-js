import nextAuth from "next-auth";
import credentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
    secret : process.env.NEXT_PUBLIC_AUTH_SECRET,
    session: {
        strategy: 'jwt'
    },
    providers: [
        credentialsProvider({
            credentials: {
                email: {label: 'Email', type: 'email', required: true, placeholder: 'Email'},
                password: {label: 'Password', type: 'password', required: true, placeholder: 'Password'}
            },

            async authorize (credentials){
                if(!credentials){
                    return null
                }
                return true;
            }
        })

        
    ],
};

const handler = nextAuth();


export{handler as GET, handler as POST}