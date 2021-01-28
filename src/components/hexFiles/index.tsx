import React from "react";
import {HexFile, HexFileService} from "services/hexFileService";
import {Container, Row} from "react-bootstrap";

const HexFileComponent = () => {
  const [hexFiles, setHexFiles] = React.useState<Array<HexFile>>([]);
  const init = () =>{
    var service = new HexFileService();
    service.listHexFilesToDownload()
      .then(setHexFiles);
  };
  const mapHexFilesToComponent = (value: HexFile, index: number): any => {
    return (
      <Row key={index}>
        <a download href={value.downloadUrl}>{value.name}</a>
      </Row>);
  };
  React.useEffect(init, []);
  return (
    <Container>
      <h1>Hex Files</h1>
      {hexFiles && hexFiles.map(mapHexFilesToComponent)}
    </Container>
  )
};

export default HexFileComponent;
