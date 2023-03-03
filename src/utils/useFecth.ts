

import list from '../disneyPlusMovie.json';

export function useFecthJson() {
        
     const listOriginals  = list.movies.filter(item => item.type === 'original');
    
     const listNew  = list.movies.filter(item => item.type === 'new');
    
     const listtrending  = list.movies.filter(item => item.type === 'trending');

     const listRecommend = list.movies.filter(item => item.type === 'recommend');


     return { listOriginals , listNew , listtrending , listRecommend };
}

