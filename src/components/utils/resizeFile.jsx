import Resizer from "react-image-file-resizer";

export const resizeFile = (file) => {
    return (
        new Promise((resolve, reject) => {
            Resizer.imageFileResizer(
                file,
                300,
                300,
                "JPEG",
                100,
                0,
                (uri) => {
                    resolve(uri);
                },
                "base64",
                (error) => {
                    reject(error);
                }
            );
        })
    );
}