module.exports = {
    name: 'AdGroupAd',
    object: {
        ad: {
            added_by_google_ads: {
                _description:
                    'Indicates if this ad was automatically added by Google Ads and not by a user. For example, this could happen when ads are automatically created as suggestions for new ads based on knowledge of how existing ads are performing.',
                _type: 'boolean',
            },
            app_ad: {
                _oneof: 'adData',
                descriptions: {
                    _type: 'array of objects',
                    pinned_field: {
                        _description:
                            'The pinned field of the asset. This restricts the asset to only serve within this field. Multiple assets can be pinned to the same field. An asset that is unpinned or pinned to a different field will not serve in a field where some other asset has been pinned.',
                        _enums: [
                            { s: 'UNSPECIFIED', description: 'No value has been specified.' },
                            {
                                s: 'UNKNOWN',
                                description:
                                    'The received value is not known in this version.\n\nThis is a response-only value.',
                            },
                            { s: 'HEADLINE_1', description: 'The asset is used in headline 1.' },
                            { s: 'HEADLINE_2', description: 'The asset is used in headline 2.' },
                            { s: 'HEADLINE_3', description: 'The asset is used in headline 3.' },
                            { s: 'DESCRIPTION_1', description: 'The asset is used in description 1.' },
                            { s: 'DESCRIPTION_2', description: 'The asset is used in description 2.' },
                        ],
                        _type: 'enum',
                    },
                    text: { _description: 'Asset text.', _type: 'string' },
                },
                headlines: {
                    _type: 'array of objects',
                    pinned_field: {
                        _description:
                            'The pinned field of the asset. This restricts the asset to only serve within this field. Multiple assets can be pinned to the same field. An asset that is unpinned or pinned to a different field will not serve in a field where some other asset has been pinned.',
                        _enums: [
                            { s: 'UNSPECIFIED', description: 'No value has been specified.' },
                            {
                                s: 'UNKNOWN',
                                description:
                                    'The received value is not known in this version.\n\nThis is a response-only value.',
                            },
                            { s: 'HEADLINE_1', description: 'The asset is used in headline 1.' },
                            { s: 'HEADLINE_2', description: 'The asset is used in headline 2.' },
                            { s: 'HEADLINE_3', description: 'The asset is used in headline 3.' },
                            { s: 'DESCRIPTION_1', description: 'The asset is used in description 1.' },
                            { s: 'DESCRIPTION_2', description: 'The asset is used in description 2.' },
                        ],
                        _type: 'enum',
                    },
                    text: { _description: 'Asset text.', _type: 'string' },
                },
                html_5_media_bundles: {
                    _type: 'array of objects',
                    asset: { _description: 'The Asset resource name of this media bundle.', _type: 'string' },
                },
                images: {
                    _type: 'array of objects',
                    asset: { _description: 'The Asset resource name of this image.', _type: 'string' },
                },
                mandatory_ad_text: {
                    pinned_field: {
                        _description:
                            'The pinned field of the asset. This restricts the asset to only serve within this field. Multiple assets can be pinned to the same field. An asset that is unpinned or pinned to a different field will not serve in a field where some other asset has been pinned.',
                        _enums: [
                            { s: 'UNSPECIFIED', description: 'No value has been specified.' },
                            {
                                s: 'UNKNOWN',
                                description:
                                    'The received value is not known in this version.\n\nThis is a response-only value.',
                            },
                            { s: 'HEADLINE_1', description: 'The asset is used in headline 1.' },
                            { s: 'HEADLINE_2', description: 'The asset is used in headline 2.' },
                            { s: 'HEADLINE_3', description: 'The asset is used in headline 3.' },
                            { s: 'DESCRIPTION_1', description: 'The asset is used in description 1.' },
                            { s: 'DESCRIPTION_2', description: 'The asset is used in description 2.' },
                        ],
                        _type: 'enum',
                    },
                    text: { _description: 'Asset text.', _type: 'string' },
                },
                youtube_videos: {
                    _type: 'array of objects',
                    asset: { _description: 'The Asset resource name of this video.', _type: 'string' },
                },
            },
            app_engagement_ad: {
                _oneof: 'adData',
                descriptions: {
                    _type: 'array of objects',
                    pinned_field: {
                        _description:
                            'The pinned field of the asset. This restricts the asset to only serve within this field. Multiple assets can be pinned to the same field. An asset that is unpinned or pinned to a different field will not serve in a field where some other asset has been pinned.',
                        _enums: [
                            { s: 'UNSPECIFIED', description: 'No value has been specified.' },
                            {
                                s: 'UNKNOWN',
                                description:
                                    'The received value is not known in this version.\n\nThis is a response-only value.',
                            },
                            { s: 'HEADLINE_1', description: 'The asset is used in headline 1.' },
                            { s: 'HEADLINE_2', description: 'The asset is used in headline 2.' },
                            { s: 'HEADLINE_3', description: 'The asset is used in headline 3.' },
                            { s: 'DESCRIPTION_1', description: 'The asset is used in description 1.' },
                            { s: 'DESCRIPTION_2', description: 'The asset is used in description 2.' },
                        ],
                        _type: 'enum',
                    },
                    text: { _description: 'Asset text.', _type: 'string' },
                },
                headlines: {
                    _type: 'array of objects',
                    pinned_field: {
                        _description:
                            'The pinned field of the asset. This restricts the asset to only serve within this field. Multiple assets can be pinned to the same field. An asset that is unpinned or pinned to a different field will not serve in a field where some other asset has been pinned.',
                        _enums: [
                            { s: 'UNSPECIFIED', description: 'No value has been specified.' },
                            {
                                s: 'UNKNOWN',
                                description:
                                    'The received value is not known in this version.\n\nThis is a response-only value.',
                            },
                            { s: 'HEADLINE_1', description: 'The asset is used in headline 1.' },
                            { s: 'HEADLINE_2', description: 'The asset is used in headline 2.' },
                            { s: 'HEADLINE_3', description: 'The asset is used in headline 3.' },
                            { s: 'DESCRIPTION_1', description: 'The asset is used in description 1.' },
                            { s: 'DESCRIPTION_2', description: 'The asset is used in description 2.' },
                        ],
                        _type: 'enum',
                    },
                    text: { _description: 'Asset text.', _type: 'string' },
                },
                images: {
                    _type: 'array of objects',
                    asset: { _description: 'The Asset resource name of this image.', _type: 'string' },
                },
                videos: {
                    _type: 'array of objects',
                    asset: { _description: 'The Asset resource name of this video.', _type: 'string' },
                },
            },
            call_only_ad: {
                _oneof: 'adData',
                business_name: { _description: 'The business name in the ad.', _type: 'string' },
                call_tracked: {
                    _description:
                        'Whether to enable call tracking for the creative. Enabling call tracking also enables call conversions.',
                    _type: 'boolean',
                },
                conversion_action: {
                    _description:
                        'The conversion action to attribute a call conversion to. If not set a default conversion action is used. This field only has effect if call_tracked is set to true. Otherwise this field is ignored.',
                    _type: 'string',
                },
                conversion_reporting_state: {
                    _description:
                        'The call conversion behavior of this call only ad. It can use its own call conversion setting, inherit the account level setting, or be disabled.',
                    _enums: [
                        { s: 'UNSPECIFIED', description: 'Not specified.' },
                        {
                            s: 'UNKNOWN',
                            description: 'Used for return value only. Represents value unknown in this version.',
                        },
                        { s: 'DISABLED', description: 'Call conversion action is disabled.' },
                        {
                            s: 'USE_ACCOUNT_LEVEL_CALL_CONVERSION_ACTION',
                            description:
                                'Call conversion action will use call conversion type set at the\naccount level.',
                        },
                        {
                            s: 'USE_RESOURCE_LEVEL_CALL_CONVERSION_ACTION',
                            description:
                                'Call conversion action will use call conversion type set at the resource\n(call only ads/call extensions) level.',
                        },
                    ],
                    _type: 'enum',
                },
                country_code: { _description: 'The country code in the ad.', _type: 'string' },
                description1: { _description: "The first line of the ad's description.", _type: 'string' },
                description2: { _description: "The second line of the ad's description.", _type: 'string' },
                disable_call_conversion: {
                    _description:
                        'Whether to disable call conversion for the creative. If set to <code>true</code>, disables call conversions even when <code>call_tracked</code> is <code>true</code>. If <code>call_tracked</code> is <code>false</code>, this field is ignored.',
                    _type: 'boolean',
                },
                headline1: { _description: 'First headline in the ad.', _type: 'string' },
                headline2: { _description: 'Second headline in the ad.', _type: 'string' },
                phone_number: { _description: 'The phone number in the ad.', _type: 'string' },
                phone_number_verification_url: {
                    _description: 'The URL to be used for phone number verification.',
                    _type: 'string',
                },
            },
            device_preference: {
                _description:
                    'The device preference for the ad. You can only specify a preference for mobile devices. When this preference is set the ad will be preferred over other ads when being displayed on a mobile device. The ad can still be displayed on other device types, e.g. if no other ads are available. If unspecified (no device preference), all devices are targeted. This is only supported by some ad types.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    { s: 'UNKNOWN', description: 'The value is unknown in this version.' },
                    { s: 'MOBILE', description: 'Mobile devices with full browsers.' },
                    { s: 'TABLET', description: 'Tablets with full browsers.' },
                    { s: 'DESKTOP', description: 'Computers.' },
                    { s: 'CONNECTED_TV', description: 'Smart TVs and game consoles.' },
                    { s: 'OTHER', description: 'Other device types.' },
                ],
                _type: 'enum',
            },
            display_upload_ad: {
                _oneof: 'adData',
                display_upload_product_type: {
                    _description: 'The product type of this ad. See comments on the enum for details.',
                    _enums: [
                        { s: 'UNSPECIFIED', description: 'Not specified.' },
                        { s: 'UNKNOWN', description: 'The value is unknown in this version.' },
                        {
                            s: 'HTML5_UPLOAD_AD',
                            description:
                                'HTML5 upload ad. This product type requires the upload_media_bundle\nfield in DisplayUploadAdInfo to be set.',
                        },
                        {
                            s: 'DYNAMIC_HTML5_EDUCATION_AD',
                            description:
                                'Dynamic HTML5 education ad. This product type requires the\nupload_media_bundle field in DisplayUploadAdInfo to be set. Can only be\nused in an education campaign.',
                        },
                        {
                            s: 'DYNAMIC_HTML5_FLIGHT_AD',
                            description:
                                'Dynamic HTML5 flight ad. This product type requires the\nupload_media_bundle field in DisplayUploadAdInfo to be set. Can only be\nused in a flight campaign.',
                        },
                        {
                            s: 'DYNAMIC_HTML5_HOTEL_RENTAL_AD',
                            description:
                                'Dynamic HTML5 hotel and rental ad. This product type requires the\nupload_media_bundle field in DisplayUploadAdInfo to be set. Can only be\nused in a hotel campaign.',
                        },
                        {
                            s: 'DYNAMIC_HTML5_JOB_AD',
                            description:
                                'Dynamic HTML5 job ad. This product type requires the\nupload_media_bundle field in DisplayUploadAdInfo to be set. Can only be\nused in a job campaign.',
                        },
                        {
                            s: 'DYNAMIC_HTML5_LOCAL_AD',
                            description:
                                'Dynamic HTML5 local ad. This product type requires the\nupload_media_bundle field in DisplayUploadAdInfo to be set. Can only be\nused in a local campaign.',
                        },
                        {
                            s: 'DYNAMIC_HTML5_REAL_ESTATE_AD',
                            description:
                                'Dynamic HTML5 real estate ad. This product type requires the\nupload_media_bundle field in DisplayUploadAdInfo to be set. Can only be\nused in a real estate campaign.',
                        },
                        {
                            s: 'DYNAMIC_HTML5_CUSTOM_AD',
                            description:
                                'Dynamic HTML5 custom ad. This product type requires the\nupload_media_bundle field in DisplayUploadAdInfo to be set. Can only be\nused in a custom campaign.',
                        },
                        {
                            s: 'DYNAMIC_HTML5_TRAVEL_AD',
                            description:
                                'Dynamic HTML5 travel ad. This product type requires the\nupload_media_bundle field in DisplayUploadAdInfo to be set. Can only be\nused in a travel campaign.',
                        },
                        {
                            s: 'DYNAMIC_HTML5_HOTEL_AD',
                            description:
                                'Dynamic HTML5 hotel ad. This product type requires the\nupload_media_bundle field in DisplayUploadAdInfo to be set. Can only be\nused in a hotel campaign.',
                        },
                    ],
                    _type: 'enum',
                },
                media_bundle: {
                    asset: { _description: 'The Asset resource name of this media bundle.', _type: 'string' },
                },
            },
            display_url: {
                _description: 'The URL that appears in the ad description for some ad formats.',
                _type: 'string',
            },
            expanded_dynamic_search_ad: {
                _oneof: 'adData',
                description: { _description: 'The description of the ad.', _type: 'string' },
            },
            expanded_text_ad: {
                _oneof: 'adData',
                description: { _description: 'The description of the ad.', _type: 'string' },
                description2: { _description: 'The second description of the ad.', _type: 'string' },
                headline_part1: { _description: "The first part of the ad's headline.", _type: 'string' },
                headline_part2: { _description: "The second part of the ad's headline.", _type: 'string' },
                headline_part3: { _description: "The third part of the ad's headline.", _type: 'string' },
                path1: { _description: "The text that can appear alongside the ad's displayed URL.", _type: 'string' },
                path2: {
                    _description: "Additional text that can appear alongside the ad's displayed URL.",
                    _type: 'string',
                },
            },
            final_app_urls: {
                _type: 'array of objects',
                os_type: {
                    _description: 'The operating system targeted by this URL. Required.',
                    _enums: [
                        { s: 'UNSPECIFIED', description: 'Not specified.' },
                        {
                            s: 'UNKNOWN',
                            description: 'Used for return value only. Represents value unknown in this version.',
                        },
                        { s: 'IOS', description: 'The Apple IOS operating system.' },
                        { s: 'ANDROID', description: 'The Android operating system.' },
                    ],
                    _type: 'enum',
                },
                url: {
                    _description:
                        'The app deep link URL. Deep links specify a location in an app that corresponds to the content you\'d like to show, and should be of the form {scheme}://{host_path} The scheme identifies which app to open. For your app, you can use a custom scheme that starts with the app\'s name. The host and path specify the unique location in the app where your content exists. Example: "exampleapp://productid_1234". Required.',
                    _type: 'string',
                },
            },
            final_mobile_urls: {
                _description: 'The list of possible final mobile URLs after all cross-domain redirects for the ad.',
                _type: 'array of strings',
            },
            final_urls: {
                _description: 'The list of possible final URLs after all cross-domain redirects for the ad.',
                _type: 'array of strings',
            },
            gmail_ad: {
                _oneof: 'adData',
                header_image: {
                    _description:
                        'The MediaFile resource name of the header image. Valid image types are GIF, JPEG and PNG. The minimum size is 300x100 pixels and the aspect ratio must be between 3:1 and 5:1 (+-1%).',
                    _type: 'string',
                },
                marketing_image: {
                    _description:
                        'The MediaFile resource name of the marketing image. Valid image types are GIF, JPEG and PNG. The image must either be landscape with a minimum size of 600x314 pixels and aspect ratio of 600:314 (+-1%) or square with a minimum size of 300x300 pixels and aspect ratio of 1:1 (+-1%)',
                    _type: 'string',
                },
                marketing_image_description: { _description: 'Description of the marketing image.', _type: 'string' },
                marketing_image_display_call_to_action: {
                    text: { _description: 'Text for the display-call-to-action.', _type: 'string' },
                    text_color: {
                        _description:
                            'Text color for the display-call-to-action in hexadecimal, e.g. #ffffff for white.',
                        _type: 'string',
                    },
                    url_collection_id: {
                        _description:
                            'Identifies the url collection in the ad.url_collections field. If not set the url defaults to final_url.',
                        _type: 'string',
                    },
                },
                marketing_image_headline: { _description: 'Headline of the marketing image.', _type: 'string' },
                product_images: {
                    _type: 'array of objects',
                    description: { _description: 'Description of the product.', _type: 'string' },
                    display_call_to_action: {
                        text: { _description: 'Text for the display-call-to-action.', _type: 'string' },
                        text_color: {
                            _description:
                                'Text color for the display-call-to-action in hexadecimal, e.g. #ffffff for white.',
                            _type: 'string',
                        },
                        url_collection_id: {
                            _description:
                                'Identifies the url collection in the ad.url_collections field. If not set the url defaults to final_url.',
                            _type: 'string',
                        },
                    },
                    product_image: {
                        _description:
                            'The MediaFile resource name of the product image. Valid image types are GIF, JPEG and PNG. The minimum size is 300x300 pixels and the aspect ratio must be 1:1 (+-1%).',
                        _type: 'string',
                    },
                },
                product_videos: {
                    _type: 'array of objects',
                    product_video: {
                        _description: 'The MediaFile resource name of a video which must be hosted on YouTube.',
                        _type: 'string',
                    },
                },
                teaser: {
                    business_name: { _description: 'Business name of the advertiser.', _type: 'string' },
                    description: { _description: 'Description of the teaser.', _type: 'string' },
                    headline: { _description: 'Headline of the teaser.', _type: 'string' },
                    logo_image: {
                        _description:
                            'The MediaFile resource name of the logo image. Valid image types are GIF, JPEG and PNG. The minimum size is 144x144 pixels and the aspect ratio must be 1:1 (+-1%).',
                        _type: 'string',
                    },
                },
            },
            hotel_ad: { _oneof: 'adData' },
            id: { _description: 'The ID of the ad.', _type: 'int64' },
            image_ad: {
                _oneof: 'adData',
                ad_id_to_copy_image_from: { _description: 'An ad ID to copy the image from.', _type: 'int64' },
                data: { _description: 'Raw image data as bytes.', _type: 'byte' },
                image_url: { _description: 'URL of the full size image.', _type: 'string' },
                media_file: { _description: 'The MediaFile resource to use for the image.', _type: 'string' },
                mime_type: {
                    _description: 'The mime type of the image.',
                    _enums: [
                        { s: 'UNSPECIFIED', description: 'The mime type has not been specified.' },
                        {
                            s: 'UNKNOWN',
                            description:
                                'The received value is not known in this version.\n\nThis is a response-only value.',
                        },
                        { s: 'IMAGE_JPEG', description: 'MIME type of image/jpeg.' },
                        { s: 'IMAGE_GIF', description: 'MIME type of image/gif.' },
                        { s: 'IMAGE_PNG', description: 'MIME type of image/png.' },
                        { s: 'FLASH', description: 'MIME type of application/x-shockwave-flash.' },
                        { s: 'TEXT_HTML', description: 'MIME type of text/html.' },
                        { s: 'PDF', description: 'MIME type of application/pdf.' },
                        { s: 'MSWORD', description: 'MIME type of application/msword.' },
                        { s: 'MSEXCEL', description: 'MIME type of application/vnd.ms-excel.' },
                        { s: 'RTF', description: 'MIME type of application/rtf.' },
                        { s: 'AUDIO_WAV', description: 'MIME type of audio/wav.' },
                        { s: 'AUDIO_MP3', description: 'MIME type of audio/mp3.' },
                        { s: 'HTML5_AD_ZIP', description: 'MIME type of application/x-html5-ad-zip.' },
                    ],
                    _type: 'enum',
                },
                name: {
                    _description:
                        "The name of the image. If the image was created from a MediaFile, this is the MediaFile's name. If the image was created from bytes, this is empty.",
                    _type: 'string',
                },
                pixel_height: { _description: 'Height in pixels of the full size image.', _type: 'int64' },
                pixel_width: { _description: 'Width in pixels of the full size image.', _type: 'int64' },
                preview_image_url: { _description: 'URL of the preview size image.', _type: 'string' },
                preview_pixel_height: { _description: 'Height in pixels of the preview size image.', _type: 'int64' },
                preview_pixel_width: { _description: 'Width in pixels of the preview size image.', _type: 'int64' },
            },
            legacy_app_install_ad: {
                _oneof: 'adData',
                app_id: { _description: 'The id of the mobile app.', _type: 'string' },
                app_store: {
                    _description: 'The app store the mobile app is available in.',
                    _enums: [
                        { s: 'UNSPECIFIED', description: 'Not specified.' },
                        {
                            s: 'UNKNOWN',
                            description: 'Used for return value only. Represents value unknown in this version.',
                        },
                        { s: 'APPLE_APP_STORE', description: 'Apple iTunes.' },
                        { s: 'GOOGLE_PLAY', description: 'Google Play.' },
                        { s: 'WINDOWS_STORE', description: 'Windows Store.' },
                        { s: 'WINDOWS_PHONE_STORE', description: 'Windows Phone Store.' },
                        { s: 'CN_APP_STORE', description: 'The app is hosted in a Chinese app store.' },
                    ],
                    _type: 'enum',
                },
                description1: { _description: 'The first description line of the ad.', _type: 'string' },
                description2: { _description: 'The second description line of the ad.', _type: 'string' },
                headline: { _description: 'The headline of the ad.', _type: 'string' },
            },
            legacy_responsive_display_ad: {
                _oneof: 'adData',
                accent_color: {
                    _description:
                        'The accent color of the ad in hexadecimal, e.g. #ffffff for white. If one of main_color and accent_color is set, the other is required as well.',
                    _type: 'string',
                },
                allow_flexible_color: {
                    _description:
                        "Advertiser's consent to allow flexible color. When true, the ad may be served with different color if necessary. When false, the ad will be served with the specified colors or a neutral color. The default value is true. Must be true if main_color and accent_color are not set.",
                    _type: 'boolean',
                },
                business_name: { _description: 'The business name in the ad.', _type: 'string' },
                call_to_action_text: { _description: 'The call-to-action text for the ad.', _type: 'string' },
                description: { _description: 'The description of the ad.', _type: 'string' },
                format_setting: {
                    _description: 'Specifies which format the ad will be served in. Default is ALL_FORMATS.',
                    _enums: [
                        { s: 'UNSPECIFIED', description: 'Not specified.' },
                        { s: 'UNKNOWN', description: 'The value is unknown in this version.' },
                        { s: 'ALL_FORMATS', description: 'Text, image and native formats.' },
                        { s: 'NON_NATIVE', description: 'Text and image formats.' },
                        {
                            s: 'NATIVE',
                            description:
                                'Native format, i.e. the format rendering is controlled by the publisher\nand not by Google.',
                        },
                    ],
                    _type: 'enum',
                },
                logo_image: {
                    _description: 'The MediaFile resource name of the logo image used in the ad.',
                    _type: 'string',
                },
                long_headline: { _description: "The long version of the ad's headline.", _type: 'string' },
                main_color: {
                    _description:
                        'The main color of the ad in hexadecimal, e.g. #ffffff for white. If one of main_color and accent_color is set, the other is required as well.',
                    _type: 'string',
                },
                marketing_image: {
                    _description: 'The MediaFile resource name of the marketing image used in the ad.',
                    _type: 'string',
                },
                price_prefix: { _description: "Prefix before price. E.g. 'as low as'.", _type: 'string' },
                promo_text: {
                    _description:
                        "Promotion text used for dyanmic formats of responsive ads. For example 'Free two-day shipping'.",
                    _type: 'string',
                },
                short_headline: { _description: "The short version of the ad's headline.", _type: 'string' },
                square_logo_image: {
                    _description: 'The MediaFile resource name of the square logo image used in the ad.',
                    _type: 'string',
                },
                square_marketing_image: {
                    _description: 'The MediaFile resource name of the square marketing image used in the ad.',
                    _type: 'string',
                },
            },
            name: {
                _description:
                    'The name of the ad. This is only used to be able to identify the ad. It does not need to be unique and does not affect the served ad.',
                _type: 'string',
            },
            resource_name: {
                _description:
                    'The resource name of the ad. Ad resource names have the form: <code>customers/{customer_id}/ads/{ad_id}</code>',
                _type: 'string',
            },
            responsive_display_ad: {
                _oneof: 'adData',
                accent_color: {
                    _description:
                        'The accent color of the ad in hexadecimal, e.g. #ffffff for white. If one of main_color and accent_color is set, the other is required as well.',
                    _type: 'string',
                },
                allow_flexible_color: {
                    _description:
                        "Advertiser's consent to allow flexible color. When true, the ad may be served with different color if necessary. When false, the ad will be served with the specified colors or a neutral color. The default value is true. Must be true if main_color and accent_color are not set.",
                    _type: 'boolean',
                },
                business_name: {
                    _description: 'The advertiser/brand name. Maximum display width is 25.',
                    _type: 'string',
                },
                call_to_action_text: {
                    _description: 'The call-to-action text for the ad. Maximum display width is 30.',
                    _type: 'string',
                },
                descriptions: {
                    _type: 'array of objects',
                    pinned_field: {
                        _description:
                            'The pinned field of the asset. This restricts the asset to only serve within this field. Multiple assets can be pinned to the same field. An asset that is unpinned or pinned to a different field will not serve in a field where some other asset has been pinned.',
                        _enums: [
                            { s: 'UNSPECIFIED', description: 'No value has been specified.' },
                            {
                                s: 'UNKNOWN',
                                description:
                                    'The received value is not known in this version.\n\nThis is a response-only value.',
                            },
                            { s: 'HEADLINE_1', description: 'The asset is used in headline 1.' },
                            { s: 'HEADLINE_2', description: 'The asset is used in headline 2.' },
                            { s: 'HEADLINE_3', description: 'The asset is used in headline 3.' },
                            { s: 'DESCRIPTION_1', description: 'The asset is used in description 1.' },
                            { s: 'DESCRIPTION_2', description: 'The asset is used in description 2.' },
                        ],
                        _type: 'enum',
                    },
                    text: { _description: 'Asset text.', _type: 'string' },
                },
                format_setting: {
                    _description: 'Specifies which format the ad will be served in. Default is ALL_FORMATS.',
                    _enums: [
                        { s: 'UNSPECIFIED', description: 'Not specified.' },
                        { s: 'UNKNOWN', description: 'The value is unknown in this version.' },
                        { s: 'ALL_FORMATS', description: 'Text, image and native formats.' },
                        { s: 'NON_NATIVE', description: 'Text and image formats.' },
                        {
                            s: 'NATIVE',
                            description:
                                'Native format, i.e. the format rendering is controlled by the publisher\nand not by Google.',
                        },
                    ],
                    _type: 'enum',
                },
                headlines: {
                    _type: 'array of objects',
                    pinned_field: {
                        _description:
                            'The pinned field of the asset. This restricts the asset to only serve within this field. Multiple assets can be pinned to the same field. An asset that is unpinned or pinned to a different field will not serve in a field where some other asset has been pinned.',
                        _enums: [
                            { s: 'UNSPECIFIED', description: 'No value has been specified.' },
                            {
                                s: 'UNKNOWN',
                                description:
                                    'The received value is not known in this version.\n\nThis is a response-only value.',
                            },
                            { s: 'HEADLINE_1', description: 'The asset is used in headline 1.' },
                            { s: 'HEADLINE_2', description: 'The asset is used in headline 2.' },
                            { s: 'HEADLINE_3', description: 'The asset is used in headline 3.' },
                            { s: 'DESCRIPTION_1', description: 'The asset is used in description 1.' },
                            { s: 'DESCRIPTION_2', description: 'The asset is used in description 2.' },
                        ],
                        _type: 'enum',
                    },
                    text: { _description: 'Asset text.', _type: 'string' },
                },
                logo_images: {
                    _type: 'array of objects',
                    asset: { _description: 'The Asset resource name of this image.', _type: 'string' },
                },
                long_headline: {
                    pinned_field: {
                        _description:
                            'The pinned field of the asset. This restricts the asset to only serve within this field. Multiple assets can be pinned to the same field. An asset that is unpinned or pinned to a different field will not serve in a field where some other asset has been pinned.',
                        _enums: [
                            { s: 'UNSPECIFIED', description: 'No value has been specified.' },
                            {
                                s: 'UNKNOWN',
                                description:
                                    'The received value is not known in this version.\n\nThis is a response-only value.',
                            },
                            { s: 'HEADLINE_1', description: 'The asset is used in headline 1.' },
                            { s: 'HEADLINE_2', description: 'The asset is used in headline 2.' },
                            { s: 'HEADLINE_3', description: 'The asset is used in headline 3.' },
                            { s: 'DESCRIPTION_1', description: 'The asset is used in description 1.' },
                            { s: 'DESCRIPTION_2', description: 'The asset is used in description 2.' },
                        ],
                        _type: 'enum',
                    },
                    text: { _description: 'Asset text.', _type: 'string' },
                },
                main_color: {
                    _description:
                        'The main color of the ad in hexadecimal, e.g. #ffffff for white. If one of main_color and accent_color is set, the other is required as well.',
                    _type: 'string',
                },
                marketing_images: {
                    _type: 'array of objects',
                    asset: { _description: 'The Asset resource name of this image.', _type: 'string' },
                },
                price_prefix: { _description: "Prefix before price. E.g. 'as low as'.", _type: 'string' },
                promo_text: {
                    _description:
                        "Promotion text used for dyanmic formats of responsive ads. For example 'Free two-day shipping'.",
                    _type: 'string',
                },
                square_logo_images: {
                    _type: 'array of objects',
                    asset: { _description: 'The Asset resource name of this image.', _type: 'string' },
                },
                square_marketing_images: {
                    _type: 'array of objects',
                    asset: { _description: 'The Asset resource name of this image.', _type: 'string' },
                },
                youtube_videos: {
                    _type: 'array of objects',
                    asset: { _description: 'The Asset resource name of this video.', _type: 'string' },
                },
            },
            responsive_search_ad: {
                _oneof: 'adData',
                descriptions: {
                    _type: 'array of objects',
                    pinned_field: {
                        _description:
                            'The pinned field of the asset. This restricts the asset to only serve within this field. Multiple assets can be pinned to the same field. An asset that is unpinned or pinned to a different field will not serve in a field where some other asset has been pinned.',
                        _enums: [
                            { s: 'UNSPECIFIED', description: 'No value has been specified.' },
                            {
                                s: 'UNKNOWN',
                                description:
                                    'The received value is not known in this version.\n\nThis is a response-only value.',
                            },
                            { s: 'HEADLINE_1', description: 'The asset is used in headline 1.' },
                            { s: 'HEADLINE_2', description: 'The asset is used in headline 2.' },
                            { s: 'HEADLINE_3', description: 'The asset is used in headline 3.' },
                            { s: 'DESCRIPTION_1', description: 'The asset is used in description 1.' },
                            { s: 'DESCRIPTION_2', description: 'The asset is used in description 2.' },
                        ],
                        _type: 'enum',
                    },
                    text: { _description: 'Asset text.', _type: 'string' },
                },
                headlines: {
                    _type: 'array of objects',
                    pinned_field: {
                        _description:
                            'The pinned field of the asset. This restricts the asset to only serve within this field. Multiple assets can be pinned to the same field. An asset that is unpinned or pinned to a different field will not serve in a field where some other asset has been pinned.',
                        _enums: [
                            { s: 'UNSPECIFIED', description: 'No value has been specified.' },
                            {
                                s: 'UNKNOWN',
                                description:
                                    'The received value is not known in this version.\n\nThis is a response-only value.',
                            },
                            { s: 'HEADLINE_1', description: 'The asset is used in headline 1.' },
                            { s: 'HEADLINE_2', description: 'The asset is used in headline 2.' },
                            { s: 'HEADLINE_3', description: 'The asset is used in headline 3.' },
                            { s: 'DESCRIPTION_1', description: 'The asset is used in description 1.' },
                            { s: 'DESCRIPTION_2', description: 'The asset is used in description 2.' },
                        ],
                        _type: 'enum',
                    },
                    text: { _description: 'Asset text.', _type: 'string' },
                },
                path1: {
                    _description: 'First part of text that may appear appended to the url displayed in the ad.',
                    _type: 'string',
                },
                path2: {
                    _description:
                        'Second part of text that may appear appended to the url displayed in the ad. This field can only be set when path1 is also set.',
                    _type: 'string',
                },
            },
            shopping_comparison_listing_ad: {
                _oneof: 'adData',
                headline: {
                    _description:
                        'Headline of the ad. This field is required. Allowed length is between 25 and 45 characters.',
                    _type: 'string',
                },
            },
            shopping_product_ad: { _oneof: 'adData' },
            shopping_smart_ad: { _oneof: 'adData' },
            system_managed_resource_source: {
                _description:
                    'If this ad is system managed, then this field will indicate the source. This field is read-only.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'Not specified.' },
                    {
                        s: 'UNKNOWN',
                        description: 'Used for return value only. Represents value unknown in this version.',
                    },
                    { s: 'AD_VARIATIONS', description: 'Generated ad variations experiment ad.' },
                ],
                _type: 'enum',
            },
            text_ad: {
                _oneof: 'adData',
                description1: { _description: "The first line of the ad's description.", _type: 'string' },
                description2: { _description: "The second line of the ad's description.", _type: 'string' },
                headline: { _description: 'The headline of the ad.', _type: 'string' },
            },
            tracking_url_template: {
                _description: 'The URL template for constructing a tracking URL.',
                _type: 'string',
            },
            type: {
                _description: 'The type of ad.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'No value has been specified.' },
                    {
                        s: 'UNKNOWN',
                        description:
                            'The received value is not known in this version.\n\nThis is a response-only value.',
                    },
                    { s: 'TEXT_AD', description: 'The ad is a text ad.' },
                    { s: 'EXPANDED_TEXT_AD', description: 'The ad is an expanded text ad.' },
                    { s: 'CALL_ONLY_AD', description: 'The ad is a call only ad.' },
                    { s: 'EXPANDED_DYNAMIC_SEARCH_AD', description: 'The ad is an expanded dynamic search ad.' },
                    { s: 'HOTEL_AD', description: 'The ad is a hotel ad.' },
                    { s: 'SHOPPING_SMART_AD', description: 'The ad is a Smart Shopping ad.' },
                    { s: 'SHOPPING_PRODUCT_AD', description: 'The ad is a standard Shopping ad.' },
                    { s: 'VIDEO_AD', description: 'The ad is a video ad.' },
                    { s: 'GMAIL_AD', description: 'This ad is a Gmail ad.' },
                    { s: 'IMAGE_AD', description: 'This ad is an Image ad.' },
                    { s: 'RESPONSIVE_SEARCH_AD', description: 'The ad is a responsive search ad.' },
                    { s: 'LEGACY_RESPONSIVE_DISPLAY_AD', description: 'The ad is a legacy responsive display ad.' },
                    { s: 'APP_AD', description: 'The ad is an app ad.' },
                    { s: 'LEGACY_APP_INSTALL_AD', description: 'The ad is a legacy app install ad.' },
                    { s: 'RESPONSIVE_DISPLAY_AD', description: 'The ad is a responsive display ad.' },
                    {
                        s: 'HTML5_UPLOAD_AD',
                        description: 'The ad is a display upload ad with the HTML5_UPLOAD_AD product type.',
                    },
                    {
                        s: 'DYNAMIC_HTML5_AD',
                        description: 'The ad is a display upload ad with one of the DYNAMIC_HTML5_* product\ntypes.',
                    },
                    { s: 'APP_ENGAGEMENT_AD', description: 'The ad is an app engagement ad.' },
                    { s: 'SHOPPING_COMPARISON_LISTING_AD', description: 'The ad is a Shopping Comparison Listing ad.' },
                ],
                _type: 'enum',
            },
            url_collections: {
                _type: 'array of objects',
                final_mobile_urls: { _description: 'A list of possible final mobile URLs.', _type: 'array of strings' },
                final_urls: { _description: 'A list of possible final URLs.', _type: 'array of strings' },
                tracking_url_template: {
                    _description: 'URL template for constructing a tracking URL.',
                    _type: 'string',
                },
                url_collection_id: {
                    _description: 'Unique identifier for this UrlCollection instance.',
                    _type: 'string',
                },
            },
            url_custom_parameters: {
                _type: 'array of objects',
                key: { _description: 'The key matching the parameter tag name.', _type: 'string' },
                value: { _description: 'The value to be substituted.', _type: 'string' },
            },
            video_ad: {
                _oneof: 'adData',
                bumper: {
                    companion_banner: {
                        _description: 'The MediaFile resource name of the companion banner used with the ad.',
                        _type: 'string',
                    },
                },
                in_stream: {
                    action_button_label: {
                        _description:
                            "Label on the CTA (call-to-action) button taking the user to the video ad's final URL. Required for TrueView for action campaigns, optional otherwise.",
                        _type: 'string',
                    },
                    action_headline: {
                        _description:
                            'Additional text displayed with the CTA (call-to-action) button to give context and encourage clicking on the button.',
                        _type: 'string',
                    },
                    companion_banner: {
                        _description: 'The MediaFile resource name of the companion banner used with the ad.',
                        _type: 'string',
                    },
                },
                media_file: { _description: 'The MediaFile resource to use for the video.', _type: 'string' },
                non_skippable: {
                    companion_banner: {
                        _description: 'The MediaFile resource name of the companion banner used with the ad.',
                        _type: 'string',
                    },
                },
                out_stream: {
                    description: { _description: 'The description line.', _type: 'string' },
                    headline: { _description: 'The headline of the ad.', _type: 'string' },
                },
            },
        },
        ad_group: { _description: 'The ad group to which the ad belongs.', _type: 'string' },
        ad_strength: {
            _description: 'Overall ad strength for this ad group ad.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'Not specified.' },
                { s: 'UNKNOWN', description: 'Used for return value only. Represents value unknown in this version.' },
                { s: 'PENDING', description: 'The ad strength is currently pending.' },
                { s: 'NO_ADS', description: 'No ads could be generated.' },
                { s: 'POOR', description: 'Poor strength.' },
                { s: 'AVERAGE', description: 'Average strength.' },
                { s: 'GOOD', description: 'Good strength.' },
                { s: 'EXCELLENT', description: 'Excellent strength.' },
            ],
            _type: 'enum',
        },
        policy_summary: {
            approval_status: {
                _description:
                    'The overall approval status of this ad, calculated based on the status of its individual policy topic entries.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'No value has been specified.' },
                    {
                        s: 'UNKNOWN',
                        description:
                            'The received value is not known in this version.\n\nThis is a response-only value.',
                    },
                    { s: 'DISAPPROVED', description: 'Will not serve.' },
                    { s: 'APPROVED_LIMITED', description: 'Serves with restrictions.' },
                    { s: 'APPROVED', description: 'Serves without restrictions.' },
                    {
                        s: 'AREA_OF_INTEREST_ONLY',
                        description:
                            'Will not serve in targeted countries, but may serve for users who are\nsearching for information about the targeted countries.',
                    },
                ],
                _type: 'enum',
            },
            policy_topic_entries: {
                _type: 'array of objects',
                constraints: {
                    _type: 'array of objects',
                    certificate_domain_mismatch_in_country_list: {
                        countries: {
                            _type: 'array of objects',
                            country_criterion: {
                                _description:
                                    'Geo target constant resource name of the country in which serving is constrained.',
                                _type: 'string',
                            },
                        },
                        total_targeted_countries: {
                            _description: 'Total number of countries targeted by the resource.',
                            _type: 'int32',
                        },
                    },
                    certificate_missing_in_country_list: {
                        countries: {
                            _type: 'array of objects',
                            country_criterion: {
                                _description:
                                    'Geo target constant resource name of the country in which serving is constrained.',
                                _type: 'string',
                            },
                        },
                        total_targeted_countries: {
                            _description: 'Total number of countries targeted by the resource.',
                            _type: 'int32',
                        },
                    },
                    country_constraint_list: {
                        countries: {
                            _type: 'array of objects',
                            country_criterion: {
                                _description:
                                    'Geo target constant resource name of the country in which serving is constrained.',
                                _type: 'string',
                            },
                        },
                        total_targeted_countries: {
                            _description: 'Total number of countries targeted by the resource.',
                            _type: 'int32',
                        },
                    },
                    reseller_constraint: {},
                },
                evidences: {
                    _type: 'array of objects',
                    destination_mismatch: {
                        url_types: {
                            _description: 'The set of URLs that did not match each other.',
                            _type: 'array of strings',
                        },
                    },
                    destination_not_working: {
                        device: {
                            _description: 'The type of device that failed to load the URL.',
                            _enums: [
                                { s: 'UNSPECIFIED', description: 'No value has been specified.' },
                                {
                                    s: 'UNKNOWN',
                                    description:
                                        'The received value is not known in this version.\n\nThis is a response-only value.',
                                },
                                { s: 'DESKTOP', description: "Landing page doesn't work on desktop device." },
                                { s: 'ANDROID', description: "Landing page doesn't work on Android device." },
                                { s: 'IOS', description: "Landing page doesn't work on iOS device." },
                            ],
                            _type: 'enum',
                        },
                        dns_error_type: {
                            _description: 'The type of DNS error.',
                            _enums: [
                                { s: 'UNSPECIFIED', description: 'No value has been specified.' },
                                {
                                    s: 'UNKNOWN',
                                    description:
                                        'The received value is not known in this version.\n\nThis is a response-only value.',
                                },
                                {
                                    s: 'HOSTNAME_NOT_FOUND',
                                    description: 'Host name not found in DNS when fetching landing page.',
                                },
                                {
                                    s: 'GOOGLE_CRAWLER_DNS_ISSUE',
                                    description:
                                        "Google internal crawler issue when communicating with DNS. This error\ndoesn't mean the landing page doesn't work. Google will recrawl the\nlanding page.",
                                },
                            ],
                            _type: 'enum',
                        },
                        expanded_url: { _description: "The full URL that didn't work.", _type: 'string' },
                        http_error_code: { _description: 'The HTTP error code.', _type: 'int64' },
                        last_checked_date_time: {
                            _description:
                                'The time the URL was last checked. The format is "YYYY-MM-DD HH:MM:SS". Examples: "2018-03-05 09:15:00" or "2018-02-01 14:34:30"',
                            _type: 'string',
                        },
                    },
                    destination_text_list: {
                        destination_texts: {
                            _description: "List of text found in the resource's destination page.",
                            _type: 'array of strings',
                        },
                    },
                    language_code: {
                        _description:
                            'The language the resource was detected to be written in. This is an IETF language tag such as "en-US".',
                        _type: 'string',
                    },
                    text_list: {
                        texts: {
                            _description: 'The fragments of text from the resource that caused the policy finding.',
                            _type: 'array of strings',
                        },
                    },
                    website_list: {
                        websites: {
                            _description: 'Websites that caused the policy finding.',
                            _type: 'array of strings',
                        },
                    },
                },
                topic: {
                    _description:
                        'Policy topic this finding refers to. For example, "ALCOHOL", "TRADEMARKS_IN_AD_TEXT", or "DESTINATION_NOT_WORKING". The set of possible policy topics is not fixed for a particular API version and may change at any time.',
                    _type: 'string',
                },
                type: {
                    _description: 'Describes the negative or positive effect this policy will have on serving.',
                    _enums: [
                        { s: 'UNSPECIFIED', description: 'No value has been specified.' },
                        {
                            s: 'UNKNOWN',
                            description:
                                'The received value is not known in this version.\n\nThis is a response-only value.',
                        },
                        { s: 'PROHIBITED', description: 'The resource will not be served.' },
                        { s: 'LIMITED', description: 'The resource will not be served under some circumstances.' },
                        {
                            s: 'FULLY_LIMITED',
                            description: 'The resource cannot serve at all because of the current targeting\ncriteria.',
                        },
                        {
                            s: 'DESCRIPTIVE',
                            description: 'May be of interest, but does not limit how the resource is served.',
                        },
                        { s: 'BROADENING', description: 'Could increase coverage beyond normal.' },
                        {
                            s: 'AREA_OF_INTEREST_ONLY',
                            description:
                                'Constrained for all targeted countries, but may serve in other countries\nthrough area of interest.',
                        },
                    ],
                    _type: 'enum',
                },
            },
            review_status: {
                _description: 'Where in the review process this ad is.',
                _enums: [
                    { s: 'UNSPECIFIED', description: 'No value has been specified.' },
                    {
                        s: 'UNKNOWN',
                        description:
                            'The received value is not known in this version.\n\nThis is a response-only value.',
                    },
                    { s: 'REVIEW_IN_PROGRESS', description: 'Currently under review.' },
                    { s: 'REVIEWED', description: 'Primary review complete. Other reviews may be continuing.' },
                    {
                        s: 'UNDER_APPEAL',
                        description:
                            'The resource has been resubmitted for approval or its policy decision has\nbeen appealed.',
                    },
                ],
                _type: 'enum',
            },
        },
        resource_name: {
            _description:
                'The resource name of the ad. Ad group ad resource names have the form: <code>customers/{customer_id}/adGroupAds/{ad_group_id}~{ad_id}</code>',
            _type: 'string',
        },
        status: {
            _description: 'The status of the ad.',
            _enums: [
                { s: 'UNSPECIFIED', description: 'No value has been specified.' },
                {
                    s: 'UNKNOWN',
                    description: 'The received value is not known in this version.\n\nThis is a response-only value.',
                },
                { s: 'ENABLED', description: 'The ad group ad is enabled.' },
                { s: 'PAUSED', description: 'The ad group ad is paused.' },
                { s: 'REMOVED', description: 'The ad group ad is removed.' },
            ],
            _type: 'enum',
        },
    },
    methods: ['get', 'list', 'create', 'update', 'delete'],
}
