export const scrollToId = (id) => {
    document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "center",
    });
};