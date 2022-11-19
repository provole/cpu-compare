import React from 'react';
import './CompareTable.css';

function CompareTable({isvisible, books, removeBook}) {

   let defaultClass = "hidden";


   if(isvisible) {
    defaultClass = "display";
   }
   
   if(books.length === 0) {
        return;
    }

    return (
        <table className={defaultClass + ` CompareTable`}>
            <tr>
                {books.map((item, index) => {
                    return (
                        <td key={index}>
                            <p onClick={(event) => removeBook(index)}>x</p>
                            <div className="CompareTableItem">
                                {item.title}
                            </div>
                            <div className="CompareTableItem">
                                {item.author}
                            </div>
                            <div className="CompareTableItem">
                                {item.country}
                            </div>
                            <div className="CompareTableItem">
                                {item.year}
                            </div>
                        </td>
                    )
                })}
            </tr>
        </table>
    );
}

export default CompareTable