import { Provider } from './provider';
import '../app/styles/globals.sass';

 
export default function RootLayout({ children }) {
  return (
  <html lang="pt-BR">

    <Provider>
        <body>{children}</body>
    </Provider> 
       </html>
  );
}
 