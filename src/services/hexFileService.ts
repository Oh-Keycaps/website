export class HexFileService {
  listHexFilesToDownload() : Promise<Array<HexFile>>{
    var files : Array<HexFile>= [];
    files.push({name:"handwired_dactyl_manuform_4x6_debug.hex", relativePath: "keyboards/handwired/dactyl_manuform/4x6/", downloadUrl:"keyboards/handwired/dactyl_manuform/4x6/handwired_dactyl_manuform_4x6_debug.hex"});
    files.push({name:"handwired_dactyl_manuform_4x6_via.hex", relativePath: "keyboards/handwired/dactyl_manuform/4x6/", downloadUrl:"keyboards/handwired/dactyl_manuform/4x6/handwired_dactyl_manuform_4x6_via.hex"});
    files.push({name:"handwired_dactyl_manuform_5x6_debug.hex", relativePath: "keyboards/handwired/dactyl_manuform/5x6/", downloadUrl:"keyboards/handwired/dactyl_manuform/5x6/handwired_dactyl_manuform_5x6_debug.hex"});
    files.push({name:"handwired_dactyl_manuform_5x6_debug12.hex", relativePath: "keyboards/handwired/dactyl_manuform/5x6/", downloadUrl:"keyboards/handwired/dactyl_manuform/5x6/handwired_dactyl_manuform_5x6_debug12.hex"});
    files.push({name:"handwired_dactyl_manuform_5x6_via.hex", relativePath: "keyboards/handwired/dactyl_manuform/5x6/", downloadUrl:"keyboards/handwired/dactyl_manuform/5x6/handwired_dactyl_manuform_5x6_via.hex"});
    files.push({name:"handwired_dactyl_manuform_5x6_via12.hex", relativePath: "keyboards/handwired/dactyl_manuform/5x6/", downloadUrl:"keyboards/handwired/dactyl_manuform/5x6/handwired_dactyl_manuform_5x6_via12.hex"});
    files.push({name:"handwired_dactyl_manuform_6x6_debug.hex", relativePath: "keyboards/handwired/dactyl_manuform/6x6/", downloadUrl:"keyboards/handwired/dactyl_manuform/6x6/handwired_dactyl_manuform_6x6_debug.hex"});
    files.push({name:"handwired_dactyl_manuform_6x6_debug12.hex", relativePath: "keyboards/handwired/dactyl_manuform/6x6/", downloadUrl:"keyboards/handwired/dactyl_manuform/6x6/handwired_dactyl_manuform_6x6_debug12.hex"});
    files.push({name:"handwired_dactyl_manuform_6x6_via.hex", relativePath: "keyboards/handwired/dactyl_manuform/6x6/", downloadUrl:"keyboards/handwired/dactyl_manuform/6x6/handwired_dactyl_manuform_6x6_via.hex"});
    files.push({name:"handwired_dactyl_manuform_6x6_via12.hex", relativePath: "keyboards/handwired/dactyl_manuform/6x6/", downloadUrl:"keyboards/handwired/dactyl_manuform/6x6/handwired_dactyl_manuform_6x6_via12.hex"});
    files.push({name:"handwired_dactyl_promicro_debug.hex", relativePath: "keyboards/handwired/dactyl_promicro/", downloadUrl:"keyboards/handwired/dactyl_promicro/handwired_dactyl_promicro_debug.hex"});
    files.push({name:"handwired_dactyl_promicro_debug12.hex", relativePath: "keyboards/handwired/dactyl_promicro/", downloadUrl:"keyboards/handwired/dactyl_promicro/handwired_dactyl_promicro_debug12.hex"});
    files.push({name:"handwired_dactyl_promicro_via.hex", relativePath: "keyboards/handwired/dactyl_promicro/", downloadUrl:"keyboards/handwired/dactyl_promicro/handwired_dactyl_promicro_via.hex"});
    files.push({name:"handwired_dactyl_promicro_via12.hex", relativePath: "keyboards/handwired/dactyl_promicro/", downloadUrl:"keyboards/handwired/dactyl_promicro/handwired_dactyl_promicro_via12.hex"});

    return Promise.resolve(files);
  }
}

export interface HexFile{
  name: string;
  downloadUrl: string;
  relativePath: string;
}
