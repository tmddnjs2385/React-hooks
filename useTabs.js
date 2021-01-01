export const useTabs = (initialTabs, allTabs) => {

    if (!allTabs || !Array.isArray(allTabs)) {
        return;
    }

    const [currentIndex, setCurrentIndex] = useState(initialTabs);

    return {
        currentItem: allTabs[currentIndex],
        changeItem: setCurrentIndex
    }

};