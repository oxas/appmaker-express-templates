import { glob, globSync, globStream, globStreamSync, Glob } from "glob";
import fs from "fs";
async function run() {
	console.log("running");
	const filesList = await glob("**/package.json", { ignore: "**/node_modules/**" }); //**/package.json
	console.log(filesList);
	filesList.forEach((file, index) => {
		const pkg = JSON.parse(fs.readFileSync(file, "utf-8"));
		const depKeys = Object.keys(pkg.dependencies);
		const devDepKeys = Object.keys(pkg.devDependencies);
		depKeys.forEach((key, _) => {
			pkg.dependencies[key] = "latest";
		});
		devDepKeys.forEach((key, _) => {
			pkg.devDependencies[key] = "latest";
		});
		fs.writeFileSync(file, JSON.stringify(pkg, null, "\t") + "\n");
	});
}

run();
