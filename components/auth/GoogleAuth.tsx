// components/GoogleAuth.tsx
import React from 'react';
import { Button, View } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { useAuth } from '@/app/contexts/AuthContext';

WebBrowser.maybeCompleteAuthSession();

interface GoogleAuthProps {
  onSuccess: () => void;
  onFailure: () => void;
}
 
const GoogleAuth: React.FC<GoogleAuthProps> = ({ onSuccess, onFailure }) => {
  const { login } = useAuth();

  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: '828638066653-fheoum0p13321vqsg401u7bdglq76rv2.apps.googleusercontent.com', // Replace with your Expo client ID
    iosClientId: '828638066653-ihaod2gkle25pvugdvqoprap86nkgc1f.apps.googleusercontent.com',
    androidClientId: '828638066653-fheoum0p13321vqsg401u7bdglq76rv2.apps.googleusercontent.com',
    webClientId: '828638066653-fheoum0p13321vqsg401u7bdglq76rv2.apps.googleusercontent.com',
  });

  React.useEffect(() => {
    if (response?.type === 'success') {
      // Ensure authentication exists
      const auth = response.authentication;
      if (!auth) {
        onFailure();
        return;
      }
  
      (async () => {
        try {
          // Safely access the token; TypeScript now knows auth is not null
          const token = (auth as any).accessToken; // or use auth.accessToken if your type includes it
          if (!token) {
            throw new Error("Missing access token.");
          }
    
          const userInfoResponse = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
            headers: { Authorization: `Bearer ${token}` },
          });
          const userInfo = await userInfoResponse.json();
    
          // Map Google user info to our User type
          const userData = {
            id: userInfo.sub,
            name: userInfo.name,
            email: userInfo.email,
            picture: userInfo.picture,
          };
    
          await login(userData);
          onSuccess();
        } catch (error) {
          console.error("Error fetching user info:", error);
          onFailure();
        }
      })();
    } else if (response?.type === 'error') {
      onFailure();
    }
  }, [response]);
  

  return (
    <View>
      <Button
        disabled={!request}
        title="Continue with Google"
        onPress={() => promptAsync()}
      />
    </View>
  );
};

export default GoogleAuth;



// components/GoogleAuth.tsx




// import React from 'react';
// import { Button, View } from 'react-native';
// import * as WebBrowser from 'expo-web-browser';
// import * as Google from 'expo-auth-session/providers/google';
// import { useAuth } from '@/app/contexts/AuthContext';

// WebBrowser.maybeCompleteAuthSession();

// interface GoogleAuthProps {
//   onSuccess: () => void;
//   onFailure: () => void;
// }

// const GoogleAuth: React.FC<GoogleAuthProps> = ({ onSuccess, onFailure }) => {
//   const { login } = useAuth();

//   const [request, response, promptAsync] = Google.useAuthRequest({
//     clientId: '343094080461-d8v8rtuuq9ptdk66eg4u380m8k58u2q4.apps.googleusercontent.com', // Replace with your Expo client ID
//     iosClientId: '343094080461-o20lon95svpce9crhep96cr1e92qonk3.apps.googleusercontent.com',
//     androidClientId: 'YOUR_ANDROID_CLIENT_ID',
//     webClientId: 'YOUR_WEB_CLIENT_ID',
//   });

//   React.useEffect(() => {
//     if (response?.type === 'success' && response.authentication) {
//       (async () => {
//         try {
//           // Cast to any to access accessToken
//           const auth = response.authentication as any;
//           const token = auth.accessToken; // or auth.access_token if that's the actual key
  
//           if (!token) {
//             throw new Error("Missing access token.");
//           }
          
//           const userInfoResponse = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
//             headers: { Authorization: `Bearer ${token}` },
//           });
//           const userInfo = await userInfoResponse.json();
  
//           const userData = {
//             id: userInfo.sub,
//             name: userInfo.name,
//             email: userInfo.email,
//             picture: userInfo.picture,
//           };
  
//           await login(userData);
//           onSuccess();
//         } catch (error) {
//           console.error("Error fetching user info:", error);
//           onFailure();
//         }
//       })();
//     } else if (response?.type === 'error') {
//       onFailure();
//     }
//   }, [response]);
  

//   return (
//     <View>
//       <Button
//         disabled={!request}
//         title="Continue with Google"
//         onPress={() => promptAsync()}
//       />
//     </View>
//   );
// };

// export default GoogleAuth;
