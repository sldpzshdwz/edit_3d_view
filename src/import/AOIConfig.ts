// AOIConfig.ts
export interface AOIPoint {
    x: number;
    y: number;
    z: number;
  }
  
export class AOI {
name: string;
aoi: AOIPoint[];
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
aoi_duration_threshold: number;
non_distracted_aois: string[];
aois: AOI[];

constructor(data: any) {
    this.aoi_duration_threshold = data.aoi_duration_threshold;
    this.non_distracted_aois = data.non_distracted_aois;
    this.aois = data.aois.map((a: any) => new AOI(a));
}
}
