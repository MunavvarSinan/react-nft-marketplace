import React from 'react'
import CollectionCard from '../collectionCard'
import './styles/punkList.css'
const index = ({punkListData, setState}) => {
    
    return (
        <div className='punkList'>
            {punkListData.map(punk => (
                <div onClick={() => setState(punk.token_id)}>
                    <CollectionCard 
                        key={punk.token_id}
                        id={punk.token_id}
                        name={punk.name}
                        traits={punk.traits}
                        image={punk.image_original_url}
                    />
                </div>
            ))}
        </div>
    )
}

export default index
