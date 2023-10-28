const styles = {
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-16 py-10",

  heroHeadText:
    "font-black text-var(--text-color) lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
  heroSubText:
    "text-var(--tertiary-color) font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",

  sectionHeadText:
    "text-var(--text-color) font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
  sectionSubText:
    "sm:text-[18px] text-var(--tertiary-color) uppercase tracking-wider",

  chatbotContainer: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    background: "var(--tertiary-gradient)",
    color: "var(--text-color)",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
    maxWidth: "400px",
  },

  
  
  userMessage: {
    background: "var(--background-color)",
    color: "var(--text-color)",
    margin: "10px 0",
    padding: "10px",
    borderRadius: "5px",
    fontSize: "18px",
  },
  botMessage: {
    background: "var(--accent-color)",
    color: "var(--text-color)",
    margin: "10px 0",
    padding: "10px",
    borderRadius: "5px",
    fontSize: "18px",
  },
  inputField: {
    border: "none",
    padding: "10px",
    width: "100%",
    outline: "none",
    fontSize: "18px",
  },
};

export { styles };
