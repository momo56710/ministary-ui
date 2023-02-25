import { Refine } from "@pankod/refine-core";
import {
  notificationProvider,
  ChakraProvider,
  refineTheme,
  ReadyPage,
  ErrorComponent,
  AuthPage,
} from "@pankod/refine-chakra-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane,faLightbulb } from "@fortawesome/free-regular-svg-icons";
import dataProvider from "@pankod/refine-simple-rest";
import { ChakraUIInferencer } from "@pankod/refine-inferencer/chakra-ui";
import routerProvider from "@pankod/refine-react-router-v6";
import { Title, Sider, Layout } from "components/layout";
import { authProvider } from "./authProvider";
import { Home, projetInnovant,Startups,editPi,createPI,createST } from "components/layout/Pages";
function App() {
  return (
    <ChakraProvider theme={refineTheme}>
      <Refine
        dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
        notificationProvider={notificationProvider()}
        ReadyPage={ReadyPage}
        catchAll={<ErrorComponent />}
        resources={[
          {
            name: "ProjetInnovent",
            list: projetInnovant,
            create : createPI,
            edit : editPi,
            options: { label: "projet innovent" },
            icon: <FontAwesomeIcon icon={faLightbulb} />,
            
          },
          {
            name: "startups",
            list: Startups,
            create : createST,
            options: { label: "Startups" },
            icon: <FontAwesomeIcon icon={faPaperPlane} />,
          },
          {
            name: "posts",
            list: ChakraUIInferencer,
            edit: ChakraUIInferencer,
            show: ChakraUIInferencer,
            create: ChakraUIInferencer,
            canDelete: true,
          },
        ]}
        Title={Title}
        Sider={Sider}
        Layout={Layout}
        routerProvider={routerProvider}
        authProvider={authProvider}
        LoginPage={AuthPage}
        DashboardPage={Home}
      />
    </ChakraProvider>
  );
}

export default App;
