// AOIConfig.ts
import * as THREE from 'three';
export class AOIPoint {
    x: number;
    y: number;
    z: number;
    constructor(x: number, y: number, z: number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
  }
  
export class AOI {
name: string;
aoi: number[][];
scale: number;
id: number;

constructor(data: any) {
    this.name = data.name;
    this.aoi = data.aoi;
    this.scale = data.scale;
    this.id = data.id;
}
}

export class AOIConfig {
    public aoi_duration_threshold: number;
    public non_distracted_aois: string[];
    public aois: AOI[];

    constructor(data: any) {
        this.aoi_duration_threshold = data.aoi_duration_threshold;
        this.non_distracted_aois = data.non_distracted_aois;
        this.aois = data.aois.map((a: any) => new AOI(a));
    }
}

export class vertex {
    at: AOIPoint={x:0,y:0,z:0};
    vertex: THREE.Mesh | null=null;
}

export class AOIInstance {
    name:string ="";
    vertices: vertex[] = [];
    
}
export class AllAOIInstance {
    AOIInstances:AOIInstance[] = [];
}