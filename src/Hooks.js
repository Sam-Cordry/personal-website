export default function useMobile() {
    const isMobile = useMediaQuery({ query: "(max-width: 1000px)" });
    return isMobile;
}