import React from 'react';
import Test3 from "./newTest";
import Test2 from "./simpleTest";
import Test4 from "./newTest4";



export default function Myelement () {
    return (
        <table>
            <tr>
                <th><Test3/></th>
            </tr>
            <tr>
                <td><Test4/></td>
            </tr>
            <tr>
                <td><Test2/></td>
            </tr>
        </table>
    );
}