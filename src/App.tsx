import "./App.css";
import { Button, ChakraProvider, Text } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";
import { Toaster } from "react-hot-toast";
import theme from "./theme/theme";
import { RecoilRoot } from "recoil";
import {eel} from "./eel";
import { useState } from "react";

eel.set_host( 'ws://localhost:10001')

// Expose the `sayHelloJS` function to Python as `say_hello_js`
function sayHelloJS( x: any ) {
  console.log( 'Hello from ' + x )
}
// WARN: must use window.eel to keep parse-able eel.expose{...}
window.eel.expose( sayHelloJS, 'say_hello_js' )

// Test anonymous function when minimized. See https://github.com/samuelhwilliams/Eel/issues/363
function show_log(msg:string) {
  console.log(msg)
}
window.eel.expose(show_log, 'show_log')

// Test calling sayHelloJS, then call the corresponding Python function
sayHelloJS( 'Javascript World!' )
eel.say_hello_py( 'Javascript World!' )

// Set the default path. Would be a text input, but this is a basic example after all
const defPath = '~'


const App = () => {
	const [message , setMessage] = useState(`Click button to choose a random file from the user's system`)
	const [path , setPath] = useState(defPath)

	const pickFile = () => {
		eel.pick_file(defPath)(( message: string ) => setMessage(message) )
	  }

	  eel.expand_user(defPath)(( path: string ) => setPath(path) )
	return (
		<>
			<BrowserRouter>
				<ChakraProvider theme={theme}>
					<RecoilRoot>
						<Toaster position="top-center" reverseOrder={false} />
						<Text>{message}</Text>
						<Button onClick={pickFile} >Pick Random File From `{path}`</Button>
						<Router />
					</RecoilRoot>
				</ChakraProvider>
			</BrowserRouter>
		</>
	);
};

export default App;
