export default function calculateAge(birthDate: string): number | null {
    if (!birthDate) return null;

    // Since i use dd-mm-yyyy Format i need to parse them in yyyy-mm-dd because Date function use it
    const [day, month, year] = birthDate.split('/').map(Number);
    const birth = new Date(year, month - 1, day);

    const today = new Date();


    let age = today.getFullYear() - birth.getFullYear();

    return age;
  }