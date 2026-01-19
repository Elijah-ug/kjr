export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

export const jwtToken=localStorage.getItem("token")
  
export const formatDate=(date)=>{
const dd= date? new Date(date).toISOString().split("T")[0]: "N/A"
return dd
}