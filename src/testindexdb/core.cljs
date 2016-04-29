(ns testindexdb.core
  (:require
      [reagent.core :as reagent]
  ;;    [cljs-idxdb.core :as idx]
      [alandipert.storage-atom :refer [local-storage]]
      [ajax.core :refer [GET POST]]
  )
)



(defn -main 
  "I don't do a whole lot."
  []
 (println "Hello from Clojure111") 
)

;(defn multiply-numbers [x y]
;  (* x y)
;)

;(defn say-hello 
;  "I don't do a whole lot."
;  []
;  #?( :clj (println "Hello from Clojure") 
;      :cljs(js/console.log (multiply-numbers 5 10) ))
;)

;(say-hello)

(defn some-stories []
 [{:Title "The title 1" :Introduction "The introduction 1" :Published "04/27/2016 - 18:38" :Reference "aHR0cDovL3d3dy56ZXJvaGVkZ2UuY29tL25ld3MvMjAxNi0wNC0yNy9lbmQtdmVuZXp1ZWxhLXJ1bnMtb3V0LW1vbmV5LXByaW50LW5ldy1tb25leQ=="} 
  {:Title "The title 2" :Introduction "The introduction 2" :Published "04/27/2017 - 18:38" :Reference "R0cDovL3d3dy56ZXJvaGVkZ2UuY29tL25ld3MvMjAxNi0wNC0yNy9lbmQtdmVuZXp1ZWxhLXJ1bnMtb3V0LW1vbmV5LXByaW50LW5ldy1tb25leQ=="}

  {:Title "The title 3" :Introduction "The introduction 3" :Published "04/27/2016 - 18:38" :Reference "HR0cDovL3d3dy56ZXJvaGVkZ2UuY29tL25ld3MvMjAxNi0wNC0yNy9lbmQtdmVuZXp1ZWxhLXJ1bnMtb3V0LW1vbmV5LXByaW50LW5ldy1tb25leQ=="}
  
  
])


(def app-state
  (reagent/atom
   {:0  (some-stories) }
   )
)


(defn build-items-html [all-items]

  [:div#blogItems.col-md-12 {:styles "margin-top: 60px;"}
    (for [{:keys [Title Updated Introduction Reference]} all-items] 
      ^{:key Reference}
       [:div {:class "panel-primary"}
        [:div {:class "panel-heading"}
          [:h3 {:class "panel-title"}
            [:a {:href (str "../story/" Reference)}
              [:div {:dangerouslySetInnerHTML {:__html Title} }] 
            ]
          ]
        ]
        [:div {:class "panel-body"}
             [:div {:dangerouslySetInnerHTML {:__html Introduction} }] 
 ;;           Updated
        ]
      ]

    )
  ]
)



(defn app[]
  [:div {}
    [:div {:role "navigation", :class "navbar navbar-inverse navbar-fixed-top"}
      [:div {:class "navbar-collapse collapse"}
        [:div {:align="left"}
          [:ul {:class "nav navbar-nav"}
            [:li
              [:a {:href "/page/0"} "Home"]
            ]
            [:li {:id="page1li"}
              [:a {:href "/page/1"} "Page 1"]
            ]
            [:li {:id="page2li"}
              [:a {:href "/page/2"} "Page 2"]
            ]

            [:li {:id="page3li"}
              [:a {:href "/page/3"} "Page 3"]
            ]

            [:li {:id="page4li"}
              [:a {:href "/page/4"} "Page 4"]
            ]

          ]
        ]
      ]
    ]
    
    [:section {:class "content"}
      [:div {:class "container top-padding-med"}
        (build-items-html (@app-state :0) )
      ]
    ]

  ]



)

(reagent/render [app] (js/document.querySelector "#cljs-target")
)

(defn handler [response]
  (
    let [
      ;;newdata (js->clj response)
      newdata (into [] ; optional -- places the answer into another vector
      (map   ; apply the given function to every element in the collection
        (fn [story] ; the function takes a student-grade
          (assoc story ; and with this student-grade, creates a new mapping
           :Title (get story "Title") :Introduction (get story "Introduction") :Reference (get story "Reference") ))
              response
      ))





;;[{:Title (get (first response) "Title") :Introduction  (get (first response) "Introduction") :Reference  (get (first response) "Reference") :Updated  (get (first response) "Updated") :Published (get (first response) "Pub;ished")}]
    ]


    ;;(.log js/console (str (select-keys (js->clj response) [:Title :Reference :Introduction])  ))    
    (swap! app-state assoc-in [:0] newdata )
  )
  
  ;;(.log js/console (str  (response) ))
  ;;(.log js/console (str  (get (first response)  "Title") ))

  
  
)

(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "something bad happened: " status " " status-text)))

(GET "http://take5people.cn:8083/api/page/0" {:handler handler
               :error-handler error-handler})

(js/setTimeout
 (fn [] (swap! app-state assoc-in [:message] "New Message"))
 2000
)
