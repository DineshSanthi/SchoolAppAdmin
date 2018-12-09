isc.DataSource.create({
    allowAdvancedCriteria:true,
    ID:"GmailAttachmentDS",
    fields:[
        {
            name:"userId",
            type:"text",
            validators:[
            ],
            primaryKey:true
        },
        {
            name:"messageId",
            type:"text",
            validators:[
            ],
            primaryKey:true
        },
        {
            name:"attachmentId",
            type:"text",
            validators:[
            ],
            primaryKey:true
        },
        {
            name:"file",
            type:"binary",
            validators:[
            ]
        }
    ]
})
