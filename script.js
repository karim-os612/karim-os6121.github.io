const greeting =
  "خاله جونم 🌸💗\n" +
  "روز دختر مبارک باشه! امیدوارم همیشه دلت شاد، لبت خندون و زندگیت پر از اتفاقای قشنگ باشه. " +
  "برات کلی سلامتی، آرامش، موفقیت و روزهای پر از شادی آرزو می‌کنم. " +
  "امیدوارم هر روزت یه دلیل تازه برای خندیدن داشته باشه و همیشه بدونی که چقدر عزیز و دوست‌داشتنی هستی. 💖";

const copyButton = document.getElementById("copyButton");
const copyStatus = document.getElementById("copyStatus");

copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(greeting);
    copyStatus.textContent = "متن تبریک کپی شد؛ آماده‌ی فرستادنه! 💗";
  } catch (error) {
    copyStatus.textContent = greeting;
  }
});
