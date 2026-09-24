'use client'
import classes from './image-picker.module.css'
import { useRef ,useState} from 'react'
import Image from 'next/image'

export default function ImagePicker({ label, name }) {
    const imageInputRef = useRef()
    const [image, setImage] = useState(null)
    function pickImageHandler() {
        imageInputRef.current.click()
    }

    function handleImageChange(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImage(reader.result); // This will set the image state to the base64 string of the image
            };
            reader.readAsDataURL(file); // This will read the file as a base64 string
        }

    }

    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {image ? (
                        <Image src={image} alt="Preview" fill />
                    ) : (
                        <p>No image selected</p>
                    )}
                </div>
                <input
                    className={classes.input}
                    type="file"
                    id={name}
                    name={name}
                    accept="image/png, image/jpeg"
                    ref={imageInputRef}
                    onChange={handleImageChange}
                    required
                />
                <button className={classes.button} type="button" onClick={pickImageHandler}>
                    Pick an Image
                </button>
            </div>
        </div>
    )
}