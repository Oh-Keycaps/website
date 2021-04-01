export class WiringService {
  listTutorials() : Promise<Array<TutorialLink>>{
    var files : Array<TutorialLink>= [];
     files.push({dataId:'H2j1yIw', title:'Dactyl Manuform building tips'})
     files.push({dataId:'krVPIw1', title:'Hotswap Dactyl Manuform building log'})
     files.push({dataId:'5FLipUG', title:'Dactyl Manuform Flexpcb building tips'})
     files.push({dataId:'9P3gTaa', title:'Dactyl Manuform hotswap'})
    return Promise.resolve(files);
  }
}

export interface TutorialLink{
  dataId: string;
  title: string;
}
