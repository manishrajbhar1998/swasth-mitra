import { Box, Typography } from "@mui/material";
import { useDropzone } from "react-dropzone";

const MyDropzone = ({ onDrop, files }) => {
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        multiple: false,
        accept: {
            'image/*': []
        }
    });

    console.log("files :: ", files)
    return (
        <Box
            {...getRootProps()}
            sx={{
                border: '2px dashed #aaa',
                padding: '10px',
                textAlign: 'center',
                cursor: 'pointer',
                marginTop: "8px"
            }}
        >
            <input {...getInputProps()} />
            {isDragActive ? (
                <Typography>Drop the files here ...</Typography>
            ) : (
                <Typography>
                    {files?.length > 0
                        ? (

                            <pan>{files[0].name}</pan>
                        )
                        : 'Drag & drop profile picture here, or click to select'
                    }
                </Typography>
            )}
        </Box>
    );
};

export default MyDropzone;