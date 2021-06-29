import {useParams} from "react-router-dom"
import classes from "./css/detail.module.css"
function getItem(id){
    const items = [

        {
           title : "python pour les nulls",
           content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, veniam",
           username:"hack2",
           date:"12/02/02",
           prog:'90'
        },
     
        {
           title : "big bang theory",
           content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, veniam",
           username:"gildas",
           date:"12/02/02",
           prog:'90'
        },
     
        {
           title : "user interface",
           content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, veniam",
           username:"coredas",
           date:"12/02/02",
           prog:'20'
        },
     
        {
           title : "core for programming",
           content:"la programmation python est très cool",
           username:"D@RiCh",
           date:"12/02/02",
           prog:'10'
        },
        {
           title : "nodejs pour les nulls",
           content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, veniam",
           username:"christian",
           date:"12/02/02",
           prog:'40'
        },
     
        {
           title : "Java pour les nulls",
           content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, veniam",
           username:"coding12",
           date:"12/02/02",
           prog:'15'
        },
     
        {
           title : "c++ pour les nulls",
           content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, veniam",
           username:"coding12",
           date:"12/02/10",
           prog:'30'
        },
    ]
    return items[Number(id)]
    
}

function Detail(){
    let params = useParams();
    let obj = getItem(params.slug-1)
    document.title = obj.title
    return (
        <section className={classes.section}>
            <div className={classes.head}>
                <h2>{obj.title}</h2>
                <address>{obj.date}</address>
                <address className={classes.author}>{obj.username}</address>
                <div className={classes.content}>
                    {obj.content}
                   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis reprehenderit laborum asperiores. Corporis omnis non harum reprehenderit hic vel vero sunt, iusto dolor quos voluptates quibusdam adipisci iste excepturi veritatis! Exercitationem rerum assumenda nihil ducimus voluptatum recusandae commodi ad eos hic maiores sed in accusamus quae minima earum aliquam fugit similique ea fuga id atque, harum quos! Accusamus in magni praesentium, facere adipisci nulla esse natus iste vero corrupti suscipit aspernatur aperiam pariatur repudiandae rerum autem veritatis nesciunt molestias excepturi repellendus harum alias? Cum ex quod ipsam amet praesentium, non facilis tempora voluptates deserunt saepe accusamus obcaecati expedita assumenda. Illum a in sunt iste aperiam aut, similique ipsum quos voluptatibus ducimus obcaecati quibusdam ratione alias voluptatem fuga placeat provident sit voluptates debitis! At praesentium, labore explicabo molestiae soluta consequatur! Accusantium explicabo quam amet harum, fuga accusamus dicta aspernatur non necessitatibus soluta laborum porro quos magnam ea sapiente voluptatum architecto? Veritatis ex perspiciatis cumque quo incidunt quis architecto numquam officiis a, sequi quos explicabo quisquam corporis officia aut similique odio dolorem at non excepturi. Delectus nostrum dolorum totam eaque nobis repellendus deserunt fugit repudiandae excepturi distinctio? Fugit beatae soluta amet, totam, odit ea voluptate voluptates molestias suscipit nostrum recusandae magnam eum dolore perferendis fuga vel a nesciunt sint eligendi deleniti harum ipsum qui? Distinctio harum tenetur dolor repellendus obcaecati incidunt. Iste iusto est animi deserunt. Enim assumenda autem amet sunt? Commodi praesentium, nobis maxime dolorem rerum voluptates enim exercitationem omnis ducimus unde facilis nihil consequatur non necessitatibus, error nam dolor cumque similique incidunt voluptatibus perferendis mollitia blanditiis. Necessitatibus, illo neque porro fugiat, reiciendis harum placeat sunt sint vitae vero debitis reprehenderit eum veniam deserunt a soluta beatae, et aut possimus. Tempora itaque provident repudiandae ex, reiciendis vero labore neque, consequuntur incidunt obcaecati expedita aut nisi consequatur, qui voluptates! Totam esse architecto obcaecati, soluta accusamus ad tempore in porro ducimus perferendis officia dignissimos blanditiis aut! Inventore, sint facilis facere pariatur eaque, soluta adipisci nesciunt officiis veniam iure quasi possimus totam, ipsum necessitatibus ducimus ullam! Officiis rem fugiat molestias, ab alias error amet voluptatem. Veniam sequi dicta et velit quasi libero in nostrum provident voluptate natus, delectus nam, obcaecati sint! Quasi dicta perferendis culpa reprehenderit dolor aut consequuntur neque dolore maxime eos eius quidem autem quod atque similique error aliquid quia, ab possimus? Maxime natus dolorem enim omnis dolores quisquam incidunt tempore id. Tenetur cum reiciendis qui sapiente assumenda est sint nostrum id praesentium quia, porro aut expedita asperiores repellat laboriosam enim vitae et eum molestias! Ipsam, officia quidem magni consequuntur alias distinctio earum neque suscipit atque sint, assumenda ad adipisci impedit perspiciatis quas sapiente doloremque dolore fugit ullam corporis, esse accusamus quo aspernatur! Accusantium dicta libero aliquid itaque exercitationem mollitia laudantium, facere deleniti numquam aspernatur quae porro impedit, sed architecto enim nihil fugiat sequi ipsam! Dolore ex molestiae, totam eius sed quam rerum soluta quia, omnis inventore eaque libero, dolores culpa esse aliquid qui sapiente dicta aperiam ea facere quaerat. Quam, nobis. Facere deleniti ratione tempora quae, aliquid quidem porro obcaecati et. Harum commodi assumenda explicabo. Eos deserunt, ipsam culpa quos sequi eveniet illo sit distinctio totam et unde. Molestiae dolorem delectus temporibus eligendi, laudantium ex est placeat fuga voluptates praesentium, ut iste nesciunt totam officiis sunt fugit blanditiis quae ratione. Cupiditate reiciendis, dolore deleniti eius repellendus similique voluptatibus aliquid ad, laudantium cumque voluptatem numquam expedita delectus optio iure dolor et error quod tempora, laborum earum eos distinctio! Reprehenderit in cumque, iste necessitatibus quos quam error est dolores nisi, delectus eaque aspernatur aut quidem accusantium? Quas adipisci in nesciunt dolorum explicabo, ratione similique unde delectus hic fuga sint quo blanditiis qui repudiandae suscipit neque nihil dolores perferendis voluptatibus velit! Amet officiis numquam tenetur, eum esse recusandae ad quidem? Rem sequi possimus voluptatibus, officiis quos consequuntur. Distinctio id quia quam amet tempora dolores, debitis accusantium quidem beatae? Porro praesentium alias doloribus minima commodi ipsum, quaerat omnis ab nisi quis natus sint iste labore vel voluptatem quam eaque temporibus? Non sequi mollitia itaque molestiae deleniti eos officiis, natus tempore, quaerat quam harum commodi atque odit vero nisi reprehenderit exercitationem. Sit est doloremque magnam nostrum deserunt doloribus magni debitis quidem nam laborum unde, vero accusantium libero nesciunt assumenda vitae tenetur. Obcaecati nulla fugit tempora sed tenetur natus culpa molestiae nihil unde ut atque totam quas reprehenderit consequuntur in voluptas eveniet placeat praesentium, ab dolorem pariatur aut. Hic animi debitis libero, tenetur soluta sit ipsa esse enim ut provident, molestias dolore numquam nesciunt voluptatem tempore possimus quaerat. Recusandae accusantium consequatur quas vitae soluta aut fugit obcaecati aliquam odio dolorem quis, totam placeat numquam! Quo, modi ipsum unde nihil vero possimus doloribus voluptates placeat ducimus autem facere impedit minima asperiores nemo illo distinctio exercitationem dolores recusandae maiores? Id eveniet nisi pariatur dignissimos, obcaecati quos explicabo exercitationem natus voluptas repellendus quia et ut? Saepe, et! Ut doloremque dolore obcaecati necessitatibus non repellat dicta dolores esse exercitationem libero, animi vitae ad incidunt enim itaque maiores quod error accusantium quia tempora velit! Sit quod corporis tempore sed repudiandae, doloremque debitis modi quia sint fuga eos hic ipsa, laboriosam tenetur ipsum? Sunt vero quis iste ea neque ipsum nihil! Dolorum quod nulla, et laborum veritatis, quasi, impedit nemo incidunt reiciendis ratione ipsa consequatur repudiandae ut ad omnis! Ex culpa distinctio, excepturi laboriosam inventore vitae similique beatae minima nostrum officiis amet, eveniet ipsum recusandae blanditiis maxime! Assumenda voluptatum culpa nesciunt incidunt! Sit voluptates expedita magnam officiis tempora atque quibusdam iste doloremque, voluptatibus autem deserunt quos! Reprehenderit officia distinctio laborum delectus vitae vero quos molestiae voluptatum cupiditate dolorum ea aperiam pariatur aliquam suscipit officiis obcaecati quam et hic, esse ab explicabo error at tempore! Reprehenderit, cum natus dicta maiores delectus iste cumque labore, repudiandae vitae optio recusandae. Eveniet voluptas, alias mollitia odio dignissimos nulla amet illo. Fuga inventore nam porro dignissimos, voluptas rem consequatur perspiciatis eius iste mollitia reprehenderit aliquam exercitationem sunt autem dolores esse totam, quibusdam dolorem quod ipsum, labore beatae? Maxime optio aperiam qui tempore perspiciatis. Voluptate consequuntur ab tenetur eum debitis deleniti, neque numquam? Beatae esse harum at fugit incidunt!
                </div>
            </div>
            
            

            
        </section>
    )
}

export default Detail;