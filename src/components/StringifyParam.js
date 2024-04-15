/*

App - Stylematch
Ver - 1.0
by - Subu Sangameswar
Last Updated - Apr 2024

This program is property of StyleMatch Inc.

This program was obtained from internet. It creates a url parameter by concatenating two or more strings
*/

export default function StringifyParam(data) {
    return Object.entries(data)
      .map((e) => e.join('='))
      .join('&');
}