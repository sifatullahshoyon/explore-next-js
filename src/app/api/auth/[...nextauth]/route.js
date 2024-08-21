import nextAuth from "next-auth";
import credentialsProvider from "next-auth/providers/credentials"

const handler = nextAuth({
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
});


export{handler as GET, handler as POST}