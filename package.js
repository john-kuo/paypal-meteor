Package.describe({
	summary: "A paypal package that helps make restful API calls to Paypal",
	version: "1.0.1",
	name: "skibummm:paypal",
	git: "git@github.com:john-kuo/meteor-paypal.git"
});

Npm.depends({
	"paypal-rest-sdk": "0.6.3"
});

Package.on_use(function(api) {
	api.add_files("paypal.js", ["client", "server"]);
	api.export("Paypal", ["client", "server"]);
});

Package.on_test(function(api) {
	//need to add some tests
});
