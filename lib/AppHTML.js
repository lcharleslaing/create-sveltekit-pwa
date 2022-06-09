class CreateAppHTML {
	static generateFile() {
		return `
<!-- ---------------------------------------------------------------- -->
<!DOCTYPE html>
<html lang="en" data-theme="emerald">
	<head>
		<meta charset="utf-8" />
		<meta name="theme-color" content="#1e88e5">
		<meta name="color-scheme" content="dark light">
		<link rel="manifest" href="%sveltekit.assets%/manifest.json">
		<link rel="shortcut icon" href="%sveltekit.assets%/favicon.png">
		<meta name="apple-mobile-web-app-capable" content="yes" /> <meta name="mobile-web-app-capable" content="yes" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		%sveltekit.head%
	</head>
	<body>
		<div>%sveltekit.body%</div>
	</body>
</html>
<!-- ---------------------------------------------------------------- -->

`
	}
}

module.exports = CreateAppHTML
