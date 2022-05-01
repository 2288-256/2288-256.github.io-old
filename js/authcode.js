async function saoi(text) {
	const uint8 = new TextEncoder().encode(text);
	const digest = await crypto.subtle.digest("SHA-1", uint8);
	return Array.from(new Uint8Array(digest))
		.map((v) => v.toString(16).padStart(2, "0"))
		.join("");
}
async function anpieo(text) {
	const uint8 = new TextEncoder().encode(text);
	const digest = await crypto.subtle.digest("SHA-256", uint8);
	return Array.from(new Uint8Array(digest))
		.map((v) => v.toString(16).padStart(2, "0"))
		.join("");
}
var today = new Date();
var year = today.getFullYear();
var month = today.getMonth() + 1;
var day = today.getDate();
var date1 = year + "" + month + "" + day;
anpieo(date1).then((hash) =>
	saoi(hash).then((AuthCodes) => (AuthCode.innerHTML = AuthCodes))
);

function textcopy() {
	async function saoi(text) {
		const uint8 = new TextEncoder().encode(text);
		const digest = await crypto.subtle.digest("SHA-1", uint8);
		return Array.from(new Uint8Array(digest))
			.map((v) => v.toString(16).padStart(2, "0"))
			.join("");
	}
	async function anpieo(text) {
		const uint8 = new TextEncoder().encode(text);
		const digest = await crypto.subtle.digest("SHA-256", uint8);
		return Array.from(new Uint8Array(digest))
			.map((v) => v.toString(16).padStart(2, "0"))
			.join("");
	}
	var today = new Date();
	var year = today.getFullYear();
	var month = today.getMonth() + 1;
	var day = today.getDate();
	var date1 = year + "" + month + "" + day;
	anpieo(date1).then((hash) =>
		saoi(hash).then((text) => {
			navigator.clipboard.writeText(text);
		})
	);
	alert(
		"認証コードをコピーしました\nMacの方は以下のリンクでご確認ください\nhttps://guide.zpw.jp/playerworld/AuthCodes"
	);
}
