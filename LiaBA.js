
// specifiy credentials and assets from Cesium ION account
Cesium.Ion.defaultAccessToken =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5ODI4ZTYyZS1mMTg2LTQ5NGEtYjdiOS02ODg2NzVhNjc0MTAiLCJpZCI6MjkwNCwiaWF0IjoxNTM1MTA5OTAzfQ.kyDX_0ScvJBkYnvXI0DW5NfZbiaRL5ezwtAUhxYnk1Y";

// setting up Cesium Viewer
var viewer = new Cesium.Viewer("cesiumContainer", {
	imageryProvider: new Cesium.IonImageryProvider({ assetId: 3 }), //3 bing maps with labels // use Sentinel2 imagery as default assetID:3954
	/////////////////////////////////////////
	// Note the next 3 lines specify that the Cesium Terrain should be used. ION account is needed
	// For a 'flat' Earth the z-offsets below for each of the tilesets needs to be adjusted
	// comment the next 3 lines to remove the Cesium terrain (Resulution approx. 30m)
	/////////////////////////////////////////
	terrainProvider: new Cesium.CesiumTerrainProvider({
		url: Cesium.IonResource.fromAssetId(1),
	}),
});



var extent = Cesium.Rectangle.fromDegrees(9.3402135372,48.6345500060,9.3429064751,48.6360814773);
Cesium.Camera.DEFAULT_VIEW_RECTANGLE = extent;
Cesium.Camera.DEFAULT_VIEW_FACTOR = 0;

viewer.scene.globe.enableLighting = true; // set lighting to true


/*const osmBlds = viewer.scene.primitives.add(
  new Cesium.Cesium3DTileset({
    url: Cesium.IonResource.fromAssetId(96188),
  })
);
*/

// load 3d cube from Cesium ION asset.
var tileset = viewer.scene.primitives.add(
	new Cesium.Cesium3DTileset({
		//url: Cesium.IonResource.fromAssetId(1398401),  // high res assett is 1433449
		url: Cesium.IonResource.fromAssetId(1433449),  // high res assett is 1433449
	})
);

viewer.flyTo(tileset);




