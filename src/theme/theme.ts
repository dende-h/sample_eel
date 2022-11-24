import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
	styles: {
		global: {
			body: {
				backgroundColor: "orange.50",
				color: "gray.750",
				fonts: "メイリオ"
			}
		}
	},
	componets: {
		Divider: {
			colors: {
				brand: {
					100: "black",
					200: "white"
				}
			}
		}
	}
});
export default theme;
