const checkbox = Array.from(document.querySelectorAll(".interest__check"));

for (let i = 0; i < checkbox.length; i++) {
    const onChecked = () => {
        let parent = checkbox[i].closest('.interest');
        let children = parent.querySelectorAll('.interest__check');
        if (checkbox[i].checked === true) {
            for (let i = 0; i < children.length; i++) {
                children[i].checked = true;
            }
        } else {
            for (let i = 0; i < children.length; i++) {
                children[i].checked = false;
            }
        }
    }
    checkbox[i].addEventListener('change', onChecked);
}