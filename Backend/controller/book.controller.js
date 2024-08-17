import Book from "../model/book.model.js";
//Database se data lete vaqt ya store karte waqt time lagta hai jisko async. operation bolte h 
//async. ko sync. ki tarah perform krne ke liye await ka use kr rhe h
export const getBook=async (req,res)=>{
    try{
        const book=await Book.find();
        res.status(200).json(book);
    } catch(error){
        console.log("Error:",error);
        res.status(500).json(error);

    }
}
export default getBook;