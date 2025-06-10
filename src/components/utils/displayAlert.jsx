import Swal from "sweetalert2"

export const displayAlert = (text, icon) => {
    return (
        Swal.fire({
            icon: icon || 'warning',
            // title: text || 'Something Wrong!',
            text: text || 'Something Wrong!',
            confirmButtonText: 'ตกลง',
            timer: 5000,
            willClose: () => {
                window.location.reload()
            }
        })
    )
}