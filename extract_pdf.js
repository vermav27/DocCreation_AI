const fs = require('fs');

// Read PRD
const prdBuf = fs.readFileSync('E:/DummyTestPlan_Cases_UsingAI/ProvidedDocuments/Product_Requirements_Document.pdf');
console.log('PRD File size:', prdBuf.length, 'bytes');
console.log('=== PRD First 2000 chars ===');
console.log(prdBuf.toString('utf8').substring(0, 2000));
console.log('=== END ===\n\n');

// Read Template
const tmplBuf = fs.readFileSync('E:/DummyTestPlan_Cases_UsingAI/ProvidedDocuments/Test_Plan_Template.pdf');
console.log('Template File size:', tmplBuf.length, 'bytes');
console.log('=== Template First 2000 chars ===');
console.log(tmplBuf.toString('utf8').substring(0, 2000));
console.log('=== END ===');
