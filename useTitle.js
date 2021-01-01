export const useTitle = (initial) => {

    const [title, setTitle] = useState(initial);

    const updateTitle = () => {
        const htmlTitle = document.querySelector("title");
        htmlTitle.innerText = title;
    };

    useEffect(updateTitle, [title]);

    return setTitle;

}