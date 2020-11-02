import {
	src,
	dest
} from "gulp";
import {
	readFileSync
} from "graceful-fs";

export const copyImage = () => {
	return src("./src/img/**/**.{svg,png,jpg,speg,gif}")
		.pipe(dest("dist/img"))
}

export const copyFonts = () => {
	let glob = JSON.parse(readFileSync("config.json"));
	return src(glob.font, {
			allowEmpty: true
		})
		.pipe(dest("dist/fonts"));
}

export const copyFavicon = () => {
	return src("src/favicon.ico", {
			allowEmpty: true
		})
		.pipe(dest("dist"));
}

module.exports = {
	copyFonts,
	copyImage,
	copyFavicon
};