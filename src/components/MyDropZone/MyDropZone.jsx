import { Box, Typography } from "@mui/material";
import { useDropzone } from "react-dropzone";

const MyDropzone = ({ onDrop, files }) => {
    const maxSize = 2 * 1024 * 1024; // 2MB

    const {
        getRootProps,
        getInputProps,
        isDragActive,
        fileRejections,
    } = useDropzone({
        onDrop,
        multiple: false,
        maxSize,
        accept: {
            'image/*': [],
        },
    });

    const getErrorMessage = (errorCode) => {
        switch (errorCode) {
            case 'file-too-large':
                return 'File size should be less than 2MB';
            case 'file-invalid-type':
                return 'Only image files are allowed';
            default:
                return 'File not accepted';
        }
    };

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
                <Typography>Drop the file here ...</Typography>
            ) : (
                <Typography>
                    {files?.length > 0 ? (
                        <span>{files[0].name}</span>
                    ) : 'Drag & drop profile picture here, or click to select'}
                </Typography>
            )}

            {/* Show size error if any */}
            {fileRejections.length > 0 && (
                <Typography color="error" fontSize="0.8rem" mt={1}>
                    {fileRejections[0]?.errors.map((err, idx) => (
                        <div key={idx}>{getErrorMessage(err.code)}</div>
                    ))}
                </Typography>
            )}
        </Box>
    );
};

export default MyDropzone;
