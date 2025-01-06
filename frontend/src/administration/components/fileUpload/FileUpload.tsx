import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { ImagePreview } from "./styledComponents/ImagePreview";
import { FileSelect } from "./styledComponents/FileSelect";
import { Flex } from "../../../general/styledComponents/Flex";

interface FileUploadProps {
  field: any;
  defaultValue?: string | File; 
}

const FileUpload = ({ field, defaultValue }: FileUploadProps) => {
  const [file, setFile] = useState<File | null>(null); 

  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const selectedFile = acceptedFiles[0];
      setFile(selectedFile);
      field.onChange(selectedFile);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: { 'image/*': [] },
    onDrop,
  });

  return (
    <>
    <h3>Imagen</h3>
      <FileSelect {...getRootProps()}>
        <input {...getInputProps()} id="photo" />
        <strong>Selecciona o arrastra</strong>
      </FileSelect>
      <Flex>
        {file && (
          <ImagePreview className="mr-7">
            <span
              className="pi pi-times"
              onClick={() => {
                setFile(null);
                field.onChange(null); 
              }}
            />
            <div>
              <img src={URL.createObjectURL(file)} alt="Nueva imagen" />
              <h4>Imagen nueva</h4>
            </div>
          </ImagePreview>
        )}
        {defaultValue && (
          <ImagePreview>
            <div>
              <img src={defaultValue} alt="Imagen existente" />
              <h4>Imagen actual</h4>
            </div>
          </ImagePreview>
        )}
      </Flex>
    </>
  );
};

export default FileUpload;
