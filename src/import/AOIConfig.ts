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
    updateVertex(){
        if(this.vertex){
            const pos=this.vertex.position;
            this.at.x=pos.x;
            this.at.y=pos.y;
            this.at.z=pos.z;
        }
    }
}
export class triangle{
    vertices: AOIPoint[] = [];
}

export class AOIInstance {
    name:string ="";
    vertices: vertex[] = [];
    triangles:triangle[] = [];
    triangles_mesh: THREE.Mesh | null = null;
    color: THREE.Color|undefined = undefined;
    scale:number=1;
    id:number=0;
    updateVertices(){
        this.vertices.forEach((v:vertex)=>{
            v.updateVertex();
        })
    }
    UpdateAOITriangles(){
        let aoiInstance=this;
        this.updateVertices();

        const verts:AOIPoint[] = aoiInstance.vertices.map((v: vertex) => v.at); // 提取 AOIPoint

        if (verts.length < 3) {
        console.warn(`AOI ${aoiInstance.name} 顶点不足 3 个，无法构造三角形`);
        return;
        }
        //顶点坐标转换为Float32Array
        let positions:number[]=[];
        aoiInstance.vertices.forEach((v: vertex) => {
        positions.push(v.at.x, v.at.y, v.at.z);
        })

        // 构造索引：1,2,3 / 1,3,4 / 1,4,5 ...
        const indices: number[] = [];
        if (aoiInstance.color===undefined){
        aoiInstance.color = new THREE.Color(
        0.3 + 0.7 * Math.random(), 
        0.3 + 0.7 * Math.random(), 
        0.3 + 0.7 * Math.random()
        );
        }
        
        const material = new THREE.MeshBasicMaterial({
        color: aoiInstance.color,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.6
        });

        for (let i = 1; i < verts.length - 1; i++) {
        indices.push(0, i, i + 1);
        // 保存三角形
        aoiInstance.triangles.push({
            vertices: []
        });
        aoiInstance.triangles[i-1].vertices.push(verts[0], verts[i], verts[i + 1]);

        }
        
        // 创建几何体
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        geometry.setIndex(indices);
        geometry.computeVertexNormals();

        
        
        // 构造 mesh
        const mesh = new THREE.Mesh(geometry, material);
        mesh.name = `${aoiInstance.name}_mesh`;

        aoiInstance.triangles_mesh=mesh;
        console.log(aoiInstance.triangles_mesh);
    }
}

export class AllAOIInstance {
    public aoi_duration_threshold: number = 0;
    public non_distracted_aois: string[] = [];
    AOIInstances:AOIInstance[] = [];
}