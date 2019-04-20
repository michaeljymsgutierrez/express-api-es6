/**
 * Main Express Server
 */
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import ip from "ip";
import https from "https";
import fs from "fs";
import { API } from "./endpoints/test";
import ENV from "./env";

const app = express();
const path = __dirname;
const publicFolder = path + "/files";

/**
 * Middlewares
 */
app.use(cors({ optionsSuccessStatus: 200 }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(helmet());
app.use(morgan("dev"));
app.use("/public", express.static(publicFolder));

app.get("/", (req, res) => {
	res.json({ success: 200 });
});

app.get("/api", API);

if (ENV.mode && ENV.mode === "development") {
	app.listen(ENV.port, ENV.host, () => {
		console.log(
			`\n  =====================================\n  = STATUS: ${ENV.mode.toUpperCase()} MODE\n  = SERVER: http://${
				ENV.host
			}:${ENV.port}\n  =====================================`
		);
	});
} else if (ENV.mode === "production") {
	/**
	 * SSL Directory for production
	 */
	const sslOptions = {
		key: fs.readFileSync(`${ENV.ssl_directory}/key.pem`),
		cert: fs.readFileSync(`${ENV.ssl_directory}/cert.pem`)
	};

	https.createServer(sslOptions, app).listen(ENV.port, ENV.host, () => {
		console.log(
			`\n  =====================================\n  = STATUS: ${ENV.mode.toUpperCase()} MODE\n  = SERVER: http://${
				ENV.host
			}:${ENV.port}\n  =====================================`
		);
	});
}
