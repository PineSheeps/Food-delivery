"use client";

import { Box, Button, Typography } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import BagCart from "./BagCart";
import { useEffect, useState } from "react";

const DataBaseInformation = [
  {
    foodId: "hool1",
    foodPic:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhMTExMWFRUXFRcVFRUYFhcYFRgXFxYXGBUVGBYYHSggGBomGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lICUtLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tK//AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAEBQMGAAECB//EAEEQAAIBAgQEAwUGAwcCBwAAAAECEQADBBIhMQVBUWEicYEGEzKRoSNCscHR8BRS4QcVM2JykvEkskNTgoOiwuL/xAAaAQADAQEBAQAAAAAAAAAAAAACAwQBAAUG/8QAKBEAAgICAQQDAAICAwAAAAAAAAECEQMhEgQiMUETUWEy8JHhUnGx/9oADAMBAAIRAxEAPwCmMACoHSu8NcK5/wB8qEwfxLPWmvFFCkx/JrXhT80z6CD0C8HvD3gnnT4YT7UaeHQ/rVQsXMrqehFXrHXlNtMp1iKm6tOMlXsZilaEnHscGuqo2G/rQF3IPFz6UHdMM07yZ+daUVTDEoxSQLnbDMIpYj6VceGyqwaQcFtj4jyp5hmnWo+pXPQadBV7CyalbBgVHh7mtHzOgqNRdUE2C2rRzaUculc20yxNd3KROLeSjb0QXMWdjWW2rbrNcJTXGvBiCrbRUimaFz1JbescNAky767VNcAGoobNWLdo3jVAXsINya7e/lWgj9K6vHSshipmyMXEyfOulBmosMgJov3gWmOKTBbBb/hNB3b9ZibpY0GXhgadGFoyztbkmDUi26hvGGB61Ib8U/hrQF7JA0GubjVCLkmigoihao5iDHvrWLqKi4q0NU2DaRV2KFpE05NB3DMONzReOuhRUNiRQmNUtpNDPDKUtBRyKK2EYS6H1O37+lZduxIGx+U8v33ru1hvd2g31pZdxGY1rwV5B+W3oKUjm5/3EVuh1wxOtZS+0LZTkuSwPKmVx5tux6EClan4aNY/YnufzpuRW0OxukKrlG4LGMCJNCMKwUyUVJUwIyphF8y5PUzXVlSxAFQTTz2cw0vmI0pWR8Y2Mi7ZK1l0UCm/Dn0AonF2wTtQ1sQah58ojuNMcLY0BqewIM0GmM5U3whGST61JmyOCuggDE4vWpMNiM1BY0LJLadK4wN4T+9qfXZoFK2Mr2IUVF74HaosVaza0MtkilLFoPkhgDU1sUpxOMFlc7zEwANSSdgK4wvGp/xE93Pw+LMD0BkCCeW471r6fJKNpaBeSKdMbs2taDVrAPbukqS6vHwjIzeqoxP4Ubc4TcSGKlk/mCnT/UOVM+GajtCvlhdWCieVHKoy+Ko3yiCKHxmK0igSvwECm7DGKJsPOppfbtM7ZVEmGbyVfiY9hI+Y61mHvHan/GZyJsQmpig76SKmvht6XtiNYp8I2hbk0F37oNvv+BoFr8iiBakUDetwaOEUDKQTYeirl6FNLrNEXgSsUUsdgqdCTF3Cz03wSAD0pbctgGals3jFVxXBE0nyDL+L1jetWLFy5cCqI5k9qFtyXEDnVswzKi5uca0KlJvYTjFID9oPDZyc4A/Cq7ZWIqTi/EWu3SZ8I0A/OuGfQUvJYUEg9b1ZS339ZSfjDsrrsILegqZ0ItrPnQoGZ1XuKccYSCo6L+/ypz/kkMXixG4rhTUr86iFMF2SW1kgdTV9wWE91aUczVU9ncN7y8g71eeMDKyLyAqLO+U1EfDSshkCo0tyZrAmbWpgQKVwpBc9mrViWopn2HKusNqahvnK1Ip2NtEnF8MDb9JpFgLutO7uLDoRSbhIPvCI2p2OL47FOWx0rkATWPiVUEkjqew6knQDuazieJCDaTGi9SdBryG1Vq7fzxqSJ3G5MwWE6AkyAfuqNNWFNw9Op7l4FZMrjpE3tBxJCFiSomSAdDG8EAwBz/zik396NctsGYHJzJgEGcuUKKKNtWDZ5ykZSAdcv3oJ6nTyApdw/ABC192JBcqlpRAdlOk9gSNB0q7HKEYtL0InGbaf2W7huHunDJcFu6uhzpaTMzkHwuwUhhIO5geE9RAz+1t62rA3vcZNcrG0CSNcn2d7MHIGzGl/BuE3rr4m7dVyFQgBId3PNFBkBthtp+Cx2v2hdtW8HYsm2uUzcW5eTPOrMCYY94ihjjdW/wA+v7/6DKSboueE9prN8Td8Uife2VVSBzLqbhU99Q1LuM8WKaWMt4nUNJCZTs0HU7ERyg+tY4fecwf4ZXg5TcS8LVyCQEbXTONBm3O0iaudrDXrL2bl+29/DlX96b1lVuqFY5gwChhcUA66hgCwJ5hOCj3V/f8AIUJO+Nlv/s7tOLT4m/lZriwFRQqJbGyKDqZMkkkk6bwIrGLuj3jEArLE5Ty7TOtP8bfFu3cNor/C3Lafw2Vi6swIzAjdTGbYiNIqou2tLVyj3BY1Um0N0u5ligbmF1mpMO0Cte/1ooRSCkzlpURQzrTFFDVzcw+ldSRydi0CpbN7XKee1SLZoPFCGEVuOT5AziqBuIIQ8DntTLCcJhZb5UZhMOsK7DWh+K8T0yJvzPSq21WyaneiK9dS30FdYfE+9VgKTXROpMmjuDWjrG5BI7x0+R+tIyS0PhGmArYM0YLEox/lGv7/AHtXLNGtdW8SQCF5/oQO3OfQUM7rRsfIrYGa3TL3No6ww65SMs84BEgTWqDkHQh9m8Cbt3NyB/GnXtRYAYRvlBP79Kn9nrYsYM3fvMfx/pSziGIbEOSNtvlQJuWS/SGVURFdWKhWi8WkGhFFWLwIfksHsg0XlNXDj7SwPavPOF4w27givS/4T3+HDjfeocq45VJjou4UJbN+BQ9zFyaIbC5efKleKsmdKNKLYLtId4HFyYonFtOlKcDaywx6j60fiWgBj5fKkuCU0MUm4kvDcPDGedE4fChbhMb1Fw26CRrTV4+lFPyDHwUz2ox/2tyD8MAei/q5oHIVRRzVVPq3htjz2PyPKl/Gr+Z7p8/rc/8AyaZYtwAvVnLkf5VWEHoCvyqqPbAS+6SMFsuy21iWOUTt0/GflUa42L91HK5LISzaZd0a4xUPB3aZY9KN9mLee+pmMonzMcvmTShsJnOKuLqjY1FmdIt27rT38Ua13T47TbN6nJxaign2T4o1iybSXVZGvMr3VvJbuqC65sgfXxW1churbzUPtM1r3eGsKiAhblx8qxmuO821dt2hCZJkkKaV4LEZIRwMwZkJyybZkI6skrmtkKhBBBGXSZIOrV0schgm2zoHGzrmlSAdhOaOxFXTn2kWOC5oY+zWJtWsXbOIQPbuXBbu24m06OCC5U6BlOUz5Rzr0fi10vh1wdpriDDvburiiQ6WQm9tyWzsAGcLI1AgyBJ894fbP+IENz3Z94UHPLr6a/Sa6wDgMisltne2Xe6QWQBlF13ctBNzwhQo0Us2ugARGXKDHZYpTVHoePssWOERV92q3MXZIkEKGZLtkryIYFhGnLvVdu1d+GYUjFYYnR2wWItqDrDC4jR/8z8qpVvDMzEdDBnqKSoV/fxBwnZIj+GtiIopMHA1oO+IMUKasY/Bwl8g1MMZUFuCYrWPtgCRR0gLYQt/QmKUYi4c08t6IsXzkIrYs5kkb/vSg/iw/KIMVxJmGRd6HsiPiE9evmO9T4HCQ2Y0Xcw0k1kpJOjlFvYuuYJs3hbMu88wDtmG4P6jrThQyWgJDDQg6eHnpB0JzCZpQwIJXWJn+v1pwgGTxE5mIAJ130kk7DWKDJemwoe0gD+HLIzDZRzjXrHlI+Y60EgJ8IG+56D9NRTWw3uiVLSrDxMABAnaTvqB2867x9kJmAMmdD4SCoOhM9iDPLUeXfJuv8G8BcpAEEkEb+FT9ZrKYWseVVVLxAH/AIkcugOlZQ/I/wDib8f6L+IqbeGtWp1Mf811w6wFWD0qTE/bYj/KnhHmN6KbD60EfGw5fRVeKpDNS9ad8atQ9JWWr4PRNLyF8NdUYs3TfpXofsdxAXLT8hJgduVeYltKtfsRcMMo50nqcdxs3HKnQZxEFmkHX9KhwtpmO1H3cKwuFfWnHD7ClSI1/Okt0tDPYpWwSIox8EXTaedMrOBPpUjt7kHSamnJ3oaqKpgVKPrIE05a9EUALvvCTECR9DTYYcEU9y8chaX0eX20DXCG296inyVCzfnRuObxqTv7tmPmStQYqz7u6VO/v7v0QgfQ1JxY/af+2Y+Yql7QEP5B/s2/2xXmwKgztosn5E0m4rbFnEe4DtbtF0uIUOuZNCNfvQZE6SB1qO1iyrBl5ifkIcecH6U54hw+3iAiXXyEjMsASygTz7kTVGB0qJ+qjcuQu4pZGaTdS40woVApKhFOe6RpmBcJEcvlFhUAYjnAmtYnDrYMBlLZlPi+J1giMx0OoGmh6V370IVd5CXNA2WAHBgo38pjKRyIJ6V2SLb0ZjmlHZbvY0EXSQRGRs69VI3A5wYNWHBex9k3lueHR8yq4BtEKw1IOsqCTpE5RPOqfwHiiYe+CJuMUuKlsAgs5QqoJ+6s7tsADVzvY9cdZW17zJbRgbrqoHvVMKFViQYOYCQIO01HLHKORSfga52mkOvZjE/xCPeV/eNYF5FuRAuNcbO5G4y6KAR0NVLhqtnPOTOvf86tvGfdYTDJh8MpXNDGN8pkEkzuSBSPCWjIYU/I6VC8Kt2TXEgGaRcQ3irVfw5YTtpVd4lhIapscu4pl4Flu0Z0rvFWSTBqTDEhxRuKEODGlOcqYCQDw3CiSCKKwuHAeORNNMMqtWv4XKZqSeS2x6joHfhvi051KmDADAKCSNzMz84+lHBSNa6FJc3YVKir20hmaNiQ0qDoD/mkQYYelME4Z71CZiNQpUaSy6gjQGFO3WtrhWa7cFw6FZQrAA+0EK3cqW37waJxtw2wAOlMjJy0dOKi9FfPCCDB7/Uz+JrviGHLZFYTlXIDqZALMDPrHoKYpdkgkwTMTOsCSB3rYwjshLNJ16dv6603nTQrjeyuYvDZmJXQQBBaTooBM+k1lFNYaTKkmTqIA3rVN4oDYRfwgF4lPhmZ5SRP/wBq5uOdQRQlnEXLYVW1zSQNoHKeukURccsc24H5Uh6HLYo4xZJ1FQcb4WbSWWkQ6k9wRE/iKs3D7AvDUbGuOP4IHJOwB8tf+KYslNA8dM8/fSrF7IYvI80n4lYhiOQNb4bcIOlVyXKBP4keqXbWeHH76UXh8GEAP770g9n8cxUBqsTuSAK8yVx0VLewi3c1NR8Ut5kNYbcRRzYTMO0Uv2Y6RULPDzrFM8JhiAfKmL28rZR5ntUipGlM5tmUeW+39n3d+240DEsfPIQfwFKeONDKejOh/wB7AfVV+dWf+1PD+C23+qPMQfwzVWOKnPm/zhbqnpmUK49HVf8AfV+JXBMU5VMX4dIMnQA5wecjVlA5kiT6mrO2Ez2MxJVbcsoWZZYmCBq5I1g6ajTYFBgLZuLIjMpDCeq7j1UketWTgWNR7agfAvhUTrkB0J/zHWfXemw839A5voWcRQNaVioUD4hoTM5VVpmSTI9DyUZswXFgmHNs4dnRo+zgG20wZEwEEncCeda47h3DlrcNbZs729BrAAy+SgCrL7P4izfRC6BFRfBA1WGEyvUFQKo+ReSTgxV7L4oqrquHe3eggkfal1JnJ70k5BqN45a094JhxaDPlAbMPeLGZsoPMsSbi7cwJ2HMG3faHB4IO1tGu37i+70AVgJAMDtnQyTz+ar2Swzm8bt5szXHmPuquwUDyC0GWXa36Ngt0XXjmHJSyxAIyBSmpy6BvCTrEMO/1rOEpBHMd9/I/v8AKiXve8spcGz3bhX/AEgBV+gn1rhVjUV5sp9tFcIjHH5QKqHEdTpVjuMWFLsThucUqM1Y1R1Qsw+CmjLmFmAaIwy8zRDwTWyk2zUIcpW5ApzhbIaJoO3bGc0aGhdN6Fqwr0EYjDwPzpJhrbwMzSVJBIX45Ay6n5nlJ7U+tX8ywaHVMsCZgAa0uaSOi34Et64yEzMEsSYJiCSJPSD6VFicSshYYnQmQQMpks3XTTlFHX7gzGep7TOu30pTvcuFdSysFM6ggbDsTOnaiSpaCu3snt4dmYEqAsjKCdd5EjkdF9BTHHqw10E6iJHprNJmxJtqSQTdVQfdkyVnNELGu0b8h6l2iWVbmYT91FAy6QANZMjz0o6pKQDe6BXxKgkNM84EDtpB5VlAYy7428Y32007VlUJSoXaNANcaYiAyAEDQAgZdNicpNS2NAVHOY7Ab1BZulVRWaSWkGP5szaxuDJFS2L6llnaSD3EKZ+R+dJf4NX6MMD9mmxAOu3WNTWcZGZCu8jTqDWYq+zqoXcEqvpqJntWyxGUsNSANNvTuaWv0J/hQ8bZKtLbEka9o/Woxh2RkYr4bglToZgwdtiDyq5cR4etxV2ncr0J2pLc4OQ2rEAbaTqeR6Cro5ElsnlC/A14PaEjMY0kVa+H3g5AnYxVPaBlUnWieB44rey9ala5jn2ou2KXaiLWMAAFCXbkgVEiSJ6VO2kzuNokvXYaRXYvg1HhlkEmhgCSTRYmmbJFd/tKINi238tzXygz9Aaodtcy2UJ1UvaPdRow/wCxx5Gr/wC21rNhW7OpPlsfoTXmPvsu5gMVIbkl62I17Mo18zXq9PG4tIizOpJjDgVzLcAJ+L/vX9dflU3EOFtbuNdwz5cxlrZ+An02oMIM7KdAdQRyO4IPY6+tZ/ezI2W+NRpnHwt0noa3G9ujc68WTYfiJclGXK43HLzHamfDbji1fKiSqsV7sVPh9THzpWLGa4l0bZGB+mX86b8MvRaugbyPqKNpXYq3VEKYFcMpk5rja3LhMkkkE69JA+VT4Di73W9xhdWMK937ltToYJ3YiYFI8dh7uKGZ3i2hNtVEy5X4mJ560d7IYGLyoVORTJUEiTPPmfLpW5Xxi37OguTS9Ht97DAYewE+FJQeQC/pQb7UxwbBsOR/KwYdNSRH0NBXmAFeNGXKEX9r/RXHTa/TeGUDeosaBFDLiagxWJOtFxD9m1eAa7tvKE86V2Lp50WtzJud6PjSNZLhrcydh1rm7fjwjXlWrmLBXKNP3tS174mtijGGpjIBBrhsfLBNjpO/PnPpSXE4rXfnW7WKjnJJmfyo3hszmkH45BmABOuhadag4iv8OUuBydSsRyg6iO+nrW7fjBJ57elBYq6fGknTxE6bwBI6HSuWP0Y5ezi9e987kysppyIUEz367cjQ9nEqGyBmCkatmEgsWBUb6RHLnympr18ZFEBoOYzr9e3ShbdzxBgYYTJ0CiQfFt0J+dN41oDlZu2dBDOR1zJ+YJrKruJeWPhnvmUfTlWU3X2DT+iy8S4fcBlRIjTqBOnkP6UDhrxz+KTuI6ExJ03n8qbWcUWGn8hHrypb/Cy2jAE66g7f+lT2NS43riPmmtlpwIkAafp1/Oo8docw1gfjtHrHzofDPkEGNhqDPfcVrEY9VWTMTy/PrSFF89Bt9pBads5BbXSZ01jbTT0o23hpPJtJPbypW0MSQx1J5CB0G+p786PwixBZJIMZpJjXaBpt+FVShYiM6EfEcA5vZl+HlTXh/DmVg+xpq9sNDREcool0DKOUDX9/velcuLG+UMLCFkHafnsPz1rLWgIrdnEZVPMlpPUA+sTHi+e9DG74qRkSYULCbVsgVgMURh/FpUeKslanh2sK7Yk9pk/6W8dwFzEdVB8Q/wBs15FctsuYhfeoYF63ueq3V7HeR3r3A21uIyNswKnyIg14txDg9+y5Flw4RmUcnWDBU8iJG1et0GS00R9XHwzd51K23tzlCga/F4dCD30+laxttXWeo+H+n6URdGIa0Gv2gmuVSIhoE6wTrv8AOhbF2PCdjsZj0nlTa4zNfdjTA7OJuWhlALL05jtVt9nuG3VvWjdRhbuhSTEiGgg1mB9lbjot9bqWhmhgVDgcw0lhOnavUhZi2MtwXZtgi5AhiV+KF0AnkKblk4pSJsdSbiUfiaKgCIAv3UGmp1MnrzY+RpZwjDqj5is+L+RGObSAXbUtPTrXVzCCw3vGuPcvkFA7yYmAzJaXTpAHMgTrNdcFw8XVJWGGo94Q1w8tlOVB2Fd1moWb025Ueoe8KYVm6NbWf9KmfPUmlBxoamfEvDw6dj9mxE82b+tUe9xEIN687DhXxx/vtlKnt/8AY/vXgBvQ+HcMxE6RVexeLNxRrXFjFQNTBpssToJT2Nb15kuw0ZeRFaxeOlu1KWxRZgWMx9ajxuMzjw0XxXVmfJQzuY3NAB1qJXJ3PcVWreJMmmJxY0OomTB1iSenLStWOmY52gvEsC3fn2qH3nfSoLd/NJ58q6wihgxYEqureXIepgU9REuQ04diYIUk/DJ9dfwpdxhpuyPhOjH0MD8PnXaD7VgNgWB12yj4agxhkTGYEbDkTz1pdVIO7QRYEyF5bfLSosPfH3t5mOpGgjrU+CIKhswmSCvaB4p6cvShb7BWOgJnQkUWjBZctMCZYE85rKnL9vlpW63ijuTHPBDLkNsZFE3bRF7QRsPnvRHCOHDN4SCNYj9+dMuJYOBPPrXm8u4r9Cp7G/Iamo7+F8MttlJHcAE/gCaNDh1ynnpQnEcK5S20yEMc4giIPoaJLZl/YCreA66DLBMEb7yJ27VJgcUy6hlgTKk7wTBUcpnn171xhLOknaYUTlB31PQacuvykt4QZCVZWIIKj4TAz5spPxa5dNz0qm/sTS9Du3jsxG56CNCdtO0zrrtTDMoEkgaTHLl4jr8p7GqqlzMQBlAAJJGkeJtZ5aDbajMAGL5zrJkE5tFA0cg8pDab794U4JsO6Q7Ftv3t5d6ivMQwG8bxWYe5r4TOvx8l05A7nXmIHfap7zBdRr++da8PHyZHLyCMFdJginLgFdqrS3ypp1w2/m1JikSx/QbdkD2CK8w9u/Zj/qTeV2T3ozEAaZhox0PPQ/OvYrkNsZrzv+0bCFrtlQzr9jdYFDqChU6jYgzFN6TlHKkvYvM1LHsruD4HcGDvO2JNwJlZbUQFIPiYySfhJpBz2ntyirp7HYe7cw+KUYn4VzXLV6yJylWGdCCCJ2nUb6VS8QuViOhivQzxppiOlmnGUS4ex/DMNiVuWHDIboyZkLHK26kqZXkNxz5VbXu/wgXDf+UoSRPigaPqdCZmORmvMfZriRs3jBj4W9dR+Qr0j2uuZ2tXl195ZX5rofpl+dbJc8dMUuzNZRsBhr5xWIvEqPFcVHaWbLmE5EmIAYCOpB1imFi69h8zzeSdSFAuodNYXcROwkab0fYsKLbNrndtW6KuiqO0yfU0HhMUAxuNIGcDyE5d/l9aDqn2pfYfTrubLpx7HAcPYyCHe0qkHQrGdSPMLXn1zXWnvtJj86W7QHhDZyOUqCunbxNSe6gK6UnpIVjQeR1JmsM089K7upOtQYXBkb7VLi7ypp0qhxsBSohxF6BHWtBSrQwjafUSD8iD61uyi3iNYHWJj0pk3D8wRPvAeE66qT8PoST2DEcqJJJAuTYkxGUMI5n8ansWs5GukflP51ylkM6zMAn5gUTeMEDL8Iyk7ZgNFPnoRPQDpJxo2zTgLA5npU+JueH3aj4fG8dRvPYD86Gt3PCzkxliPMmB5nn6VG15fCwOhEMOZ7HrpFZv2dWyS2wQkBgHUHQ8jl1MneZmo8PicykMCDz0kefbrS7FXwSdtQQDEkg6D8VNF8OtTA1AO86kyfwAGvnQNUrYxO9E14MuXYxsARHX0EdaiZiWAbYE/lt++Vcp4mCzlIOUzPUgN2Gw171JZIOYNppB59NCOX9a7ycSEDkf3861UJtd/pWVnE6y28Pw72m/fLSnLX/eLlI1ra3BckiprSAHX/mvN/kyvwhJewLLUN69nT3YMMDpOx9flT+8wuAila8LDvDZgNzHadR0ifpToqwG6FuOvABU08I3O0nQGBvuYqCxDgRO8AsTI6E9SYH5RWcXw3h8IJAnLPxZR1PM/rW8K+bJn8MABR+dHHejnGlZJdtiJYgS0iIKkkEkk9orr+IzSGOVJEa+IwQSZG3hnTckAmOahMwY2Q2oc/EQBp3PWI8zRLPkUByGPdtFTTSSdWO46A94psIJrQucmnTHV/ieQrlU5SgdSdAyiQSNI5H5HoJjt485dZkkakwRPJQNG6Utt413VVMvbRvslAUXFkQwDaeEmDGuvLeiPfpmBZSQPLKCR4Segif0mmJuqYppXaG63mPME8wY08yKJNwi2Y9W5/LpVau4i2EUtcRHBIBts2aCZn3ZUzy3MUHY9omVodiykESUK6T4diRJiu4RZ3KSLbwfGNaaWYlTsTvS324xYe4CrZYtFc2mhZp0n/TS3H8SW6ttbbXC7fcKbTtsdem/ftSvHYP3oUNlJH85jz0aOvOtcUpKRifa0Wb2ZsA4W8SZZbV7xAboU8SkjkZB8wDyqh8Wwq21RgSVK6k6nMpiO/Krz7LYY2sJjQtvKRZuwBBnTTaqdxG8jBbZeTaaWAGgJHwjrB8qozSjKCEYE45HQowtppLEQTEDoBtPfWvV+CuuIwVpW/xLS5iJmbZYgkDswAPpXneCso7EKzMwIGTKFJkTuWI/fKn3siXW/be2WhW93cttEqrkhiNp5yI671MpSi9oomoyWmH8ZuC1HhyhjlBn4gBMgDYBmI818qA4Rh/szauy1poAf79udsx5gfzctJ60HxjGtdusHZfd2lNtZ0DFdMwnWS0n1ongeOVYQ3FLzAAz7Hk0rpuKDqJt+PCCwwSW/LGvEMKVCK4lwpnTc5m8XqADXNvDKoEjuPzpvxS6FS0+UGB7tm0yrB8JOug1I0/lqvXcerZYuKSs5hvrJGUR8WnzmmY2lBASVyZFir7H4R/ya1bsK0Z4JnWYE6DWdzt+9aJW1ahbrNkESZXZjoB4okfjSnF4tiZMBdxMZj2yh+fnz9KY2CopheKZlIW2m4kdT6VDhcbczwTBBzCZGo5HzH4HrXGGxFtsxtlliBLR4CRGZQZnWOetR3L2VWVvtGjcK0z/ADx5j98+5WqO4tMcm9bdw3KNY1II6R2ERNbfI2WQDBIUaeJQWJXaSZ3PKT2pTg5EbwQCSJkH4tPQ/j0qay5BBAEZjB2WMzEx3ApDcvQ6ooixwUJlzQcxZuQ2gfTbrNKr9zdbeveCNdOsR/SmN5ZTLmIgbCNCdSZmYJOnnsK4WyEEm2SCdRmGsifM/DA8+m7uVLYrjb0KcJhSbgzHcyDBgZjAnpqsVPw7FeMHSEIEtIXnt8hpXV3idot47WXKTlhvvAaBpE5ZiYg1EytkUtDFoZRpsR/LH7iuf2ak6oZwjAhHzb+HKQJkw3fUDU9D001aVo1nke/eoeHMASAcxBJLj4Dy8PUbfUjQ0XfBNEoti3JIBbHkGI+lZUNy48msp3wCfnPUMJbAMgx+96g4ziggHL971xcfKMw/pQeMAuDXX9K8KScXZ66phPCLpnNvNWHCkM0cyKS8KsBAI2o/FXSoDLQNts1pCr2rwBQqy89D5jUVVMXjDl0+KI3+tXbjN03rJEd/Wqbf4Ux0nU/r1qrAmlTEzY54HgUxqm40pctkTBhQwAyuG5ctO3lRSZLL2862ZUn3tu7bXMQQAVR+RBhhGhnlOlbwPBb1q5Nq8FbmjahhOshdwN9pqbjF57wZy1vOqhGAVvtIMBiXIg+Q2FUqPB9opvn/ACLPxjjWFW07CyGfULbNpgzHXKPeKsQYGoOlILPFlvJBwbKx2LPmRY0+94mMR4u4E6ClNniV22qh7S3FUQFZVymTJ7zzBFSv7RG46kWFRc2VSGObMQNOh2FG5NgqEUMLfCs4csqs2uQW4UkAyApOhkEx33pbiMAMgeWRfFpcAJGsRGXmY+fytBtf4Z1EqG8ieYoPimJsNfEqqsRlZ4aJAGhA28x8q6PhM5u3QhwmDZyzABoAGYL4t/iGYg8x8PWOdS3cOY0sXLrnSPEB3hTlYH1PrRPDeI27zlbRukpOaSmRgdCuULJB11mae45rV1lnPZYoqQo+LIAoJkbwo1kbbVvJmOKvZX7nErnvLbKr2hlK30YtrJkaHeO551XOG8PYWWBE3HLEnMu5PLWZiPr3q7W+GmZF7MBzOSHjoSCynuR6VvGYdAgIzhxuHDFY55DbEPz+IL6UyM7QqUEmeffw9+26lkuElCjMAWMgkAyuzAGas9jiC2nXFqrANaIu2yjKzPAyFFI8RzgajSDqaaXOHJAy5yf5iMqk+QB+tBtwq4TAeBpJVZbvpP1onP7QPx/ojv4UgNdcoHgmC2iaEgmhbbksLoYLmcNB3NtBAEcpgT0o/G+xjMDBfxNnJIQtOsffGmpMRv5UG3sbdn/GM9Sonb/XtFanBI5qbZcPZrEu+HuMRnD5fszzzXZuLHUi4y/LnVexHDB7ybYVI8MqNWE853NF8GwOIw3iVwwOU+J/D4Y1jIT92d/6nYUyPFl7ZWLA9dwKGSUnUTYXHchPawrrvJ13hcwXbwmNOWx9BrRN60SC7ZnA0LfeB1yqB8MnsOc00uXFHIn1OtCtjtdBFFHp5Pyc+oivANh8IWJQhbagcvLVQRPTrsOdSraKEQdJmBp031nltWXOIE6CtWLVxzMGmLp4x2xT6iUtIkxLBp0EnWYE9Y8qHsYYzoI79PI8jTMYbLq2tD38cBoKZUX6F3L7E3Ela2QXGbUaqDmiRuw1MQPOobOJFzw5isNAmZ+Y2Oi/uKOxmMVxGbKdtOn6UHg1S0wDqHRtC7bgciIEqe4+RFSZI1IrxyuP6cYqyWaGyudB47bZgAOTiGYaHmd6Jw/CpAHjjoTI9BuB61LhcWiaZswGxNG/3ymwp0UqtiJyl4R3heF5RtRq4URqK3YxoIk1y/FFmKFStnOLSIHwaztW6IGNTrWU3mK4MerbBt7VXMYxQSNqysrwIuz3q2E8K4pIin9u8CutZWUuQbQI+Kia4GJXmK1WV6WLfk8/JojxHs9ZvwyOyMOYkf0oJPZprZ8T5hy5fSsrKdkxxSsVjyyviG2OHJcHQgQWGhPY0jx1uxYYKFY+PNBjwsvMRpWVlKhJtbHOKUhvxrHLfspeymAfdlVbLvqppMuCN4Nbtk23IzBs0gxoFMCSJNZWUa0qO9NnXDsBewjsrW0+0AVwAqMYMhlZJH+4TvRuIcKSgS7oJLM6T5nJlA8wK3WUQrzsIsjMNGLCd9QfrrXYZ9R6DxH9NDWVlDRtnJthJIGWT4soAJYnQk8/WsuYwLozTO0qNPUVlZWGguLCOSGutqIiAR3+JTXWHwzGAGdlBjRbZjoPEynpWVlECzrFKySqtsYn4TIJDHJDb6fe5UHdxH70/KsrKsxJVZJlbuiG7cMUGttmPQVlZTm6QpJNjXB4ZFEkT3qLG8aRNAK3WUpLk9h+BRiON5qTYzHk7VlZQTk14GwimB4fDXLjLrpNMOMqy5RO1ZWVLKb5JFMYLi2AJcNGcKt5n8q3WU29A1ssruFWkT4jc1uspUApA5xjVlZWU4Wf/9k=",
    foodName: "dsda",
    price: 14500,
    foodIngredients: "orts1",
  },
  {
    foodId: "hool2",
    foodPic:
      "data:image/jpeg;base64,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",
    foodName: "dsda2",
    price: 15000,
    foodIngredients: "orts2",
  },
  {
    foodId: "hool3",
    foodPic:
      "data:image/jpeg;base64,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",
    foodName: "dsda3",
    price: 16000,
    foodIngredients: "orts3",
  },
];

// type DataBaseInformationProps = {
//   foodPic: string;
//   foodName: string;
//   price: number;
//   foodIngredients: string;
// };

export const Bag = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [card, setCard] = useState<boolean>(true);
  const [count, setCount] = useState<any>({});
  const [oneFoodPrice, setoneFoodPrice] = useState<any>({});
  const [lastPrice, setLastPrice] = useState<number>(0);
  const toggleBag = () => {
    setIsVisible(!isVisible);
  };

  const incrementCount = (foodId: string) => {
    setCount((prev: any) => ({
      ...prev,
      [foodId]: prev[foodId] == undefined ? 1 : prev[foodId] + 1,
    }));
  };

  const decrementCount = (foodId: string) => {
    setCount((prev: any) => ({
      ...prev,
      [foodId]:
        prev[foodId] == undefined
          ? 0
          : prev[foodId] === 0
          ? 0
          : prev[foodId] - 1,
    }));
  };

  const closeBagCart = () => {
    setCard(false);
    setCount(0);
  };

  const totalPrice = DataBaseInformation.map((el) => {
    const foodCount = count[el.foodId];
    const totalPrice = el.price * foodCount;
    return totalPrice;
  });

  const handleCountChange = () => {};

  useEffect(() => {
    const totalPrice = DataBaseInformation.reduce((total, item) => {
      const itemCount = count[item.foodId] || 0;
      return total + item.price * itemCount;
    }, 0);
    setLastPrice(totalPrice);
  });

  if (!isVisible) return null;

  return (
    <div
      style={{
        display: isVisible ? "flex" : "none",
        position: "absolute",
        zIndex: "100",
        width: "100%",
        height: "100%",
        color: "black",
      }}
    >
      <div
        style={{
          width: "75%",
          backgroundColor: "#00000080",
          opacity: "50%",
        }}
      ></div>
      <div
        style={{
          width: "25%",
          backgroundColor: "white",
          right: "0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button
              onClick={toggleBag}
              style={{ width: "48px", height: "48px", padding: "0px" }}
            >
              <KeyboardArrowLeftIcon />
            </Button>
            <p
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Таны сагс
            </p>
            <p style={{ width: "50px" }} />
          </div>
          <Box
            sx={{
              margin: "16px 0 16px px",
              borderBottom: " 1px solid #D6D8DB",
              borderTop: "1px solid #D6D8DB",
            }}
          >
            {DataBaseInformation.map((el, Item) => {
              return (
                <BagCart
                  sx={{
                    display: card ? "flex" : "none",
                    padding: "16px",
                    gap: "16px",
                    backgroundColor: "white",
                  }}
                  key={Item}
                  foodPic={el.foodPic}
                  foodName={el.foodName}
                  foodIngredients={el.foodIngredients}
                  price={el.price}
                  onCountChange={handleCountChange}
                  incrementCount={() => incrementCount(el.foodId)}
                  decrementCount={() => decrementCount(el.foodId)}
                  count={"count"}
                  closeBagCart={closeBagCart}
                  totalPrice={totalPrice}
                />
              );
            })}
          </Box>
        </div>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "172px",
            gap: "10px",
            paddingX: "32px",
            paddingTop: "10px",
            paddingBottom: "30px",
            width: "full",

            boxShadow: "3",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "start",
              width: "50%",
            }}
          >
            <Typography>Таны нийт төлөх дүн</Typography>
            <Typography sx={{ fontWeight: "700", fontSize: "18px" }}>
              {lastPrice}
            </Typography>
          </Box>
          <Button sx={{ width: "50%", height: "48px" }} variant="contained">
            Захиалах
          </Button>
        </Box>
      </div>
    </div>
  );
};
