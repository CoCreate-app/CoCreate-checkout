module.exports = {
    "config": {
        "apiKey": "2061acef-0451-4545-f754-60cf8160",
        "organization_Id": "5ff747727005da1c272740ab",
        "host": "general.cocreate.app"
    },
    
    "sources": [{
            "entry": "./docs/index.html",
            "collection": "files",
            "document_id": "6020cd7fb526e5753d0ecb7b",
            "key": "src",
            "data":{
                "name": "index.html",
                "path": "/docs/checkout/index.html",
                "domains": [
                    "cocreate.app",
                    "general.cocreate.app"
                ],
                "directory": "/docs/checkout",
                "content-type": "text/html",
                "public": "true",
                "website_id": "614298c2829b690010a5c031"
            }
        }
    ],

	"extract": {
		"directory": "./src/",
		"extensions": [
			"js",
			"css",
			"html"
		],
		"ignores": [
			"node_modules",
			"vendor",
			"bower_components",
			"archive"
		]
	}
}

