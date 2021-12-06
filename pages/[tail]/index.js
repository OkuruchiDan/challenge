import React, {useEffect, useState} from 'react';

const Tail = ({dataFromApp: long_tails, exampleJson, query }) => {
    const [result, setResult] = useState();
    useEffect(() => {
        const foundedTail = long_tails.filter(tail => tail.tail === query.tail)[0]
        const jsonId = foundedTail && foundedTail.json_id
        const tailFromJson = jsonId && exampleJson.find(el => el.id.toString() === jsonId.toString())
        setResult(tailFromJson)
    }, [query, long_tails])

    return (
        <div>
            <div className="container-80">
                <div className={"divider"}/>
                <div className="button-wrapper-90">
                    <div className="title">
                        {result ? result.title : '..loading'}
                    </div>
                    <div className="description">
                        {result ? result.description : '..loading'}
                    </div>
                </div>
                <div className={"divider"}/>
            </div>
        </div>
    );
};

export default Tail;