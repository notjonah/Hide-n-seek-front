import { NgModule } from '@angular/core';
import { MapModule, MapAPILoader, WindowRef, DocumentRef, GoogleMapAPILoaderConfig, GoogleMapAPILoader, MapComponent } from "angular-maps";

@NgModule({
	declarations: [MapComponent],
	imports: [MapModule.forRootGoogle(),],
	exports: [MapComponent]
	, providers:
		[
			{ provide: MapAPILoader, deps: [], useFactory: GoogleMapServiceProviderFactory }

		]
})
export class ComponentsModule { }
// export function MapServiceProviderFactory() {
// 	let bc: BingMapAPILoaderConfig = new BingMapAPILoaderConfig();
// 	bc.apiKey = "AlNStI4zlV2ljxfbF06gBMyXjUgzWnedwDn4yyCNpSWpdwCUKQ3KuGrNkdzczbMs"; // your bing map key
// 	bc.branch = "experimental";
// 	// to use the experimental bing brach. There are some bug fixes for
// 	// clustering in that branch you will need if you want to use 
// 	// clustering.
// 	return new BingMapAPILoader(bc, new WindowRef(), new DocumentRef());
// }

export function GoogleMapServiceProviderFactory(){
	    const gc: GoogleMapAPILoaderConfig = new GoogleMapAPILoaderConfig();
	   gc.apiKey = '';

	gc.enableClustering = true;
    return new GoogleMapAPILoader(gc, new WindowRef(), new DocumentRef());
} 