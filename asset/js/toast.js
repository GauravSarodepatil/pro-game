let tc = document.getElementById("tc")
        function toastify(type, msg) {
            let icon
            if (type == "bg-danger") {
                icon = `<i class="bi bi-symmetry-vertical"></i>`
            }
            if (type == "bg-primary") {
                icon = `<i class="bi bi-tiktok"></i>`
            }
            if (type == "bg-dark") {
                icon = `<i class="bi bi-airplane-engines"></i>`
            }

            let toast = document.createElement("div")
            toast.classList.add("toastify", "p-4", type)
            toast.innerHTML = icon + msg


            tc.appendChild(toast)
            setTimeout(function () {
                toast.remove()
            }, 5000)
        }