import piexif

def get_exif_key(key):
	if key == 'Accerleration':
		return piexif.ExifIFD.Acceleration
	elif key == 'ApertureValue':
		return piexif.ExifIFD.ApertureValue
	elif key == 'BodySerialNumber':
		return piexif.ExifIFD.BodySerialNumber
	elif key == 'BrightnessValue':
		return piexif.ExifIFD.BrightnessValue
	elif key == 'CFAPattern':
		return piexif.ExifIFD.CFAPattern
	elif key == 'CameraElevationAngle':
		return piexif.ExifIFD.CameraElevationAngle
	elif key == 'CameraOwnerName':
		return piexif.ExifIFD.CameraOwnerName
	elif key == 'ColorSpace':
		return piexif.ExifIFD.ColorSpace
	elif key == 'ComponentsConfiguration':
		return piexif.ExifIFD.ComponentsConfiguration
	elif key == 'CompressedBitsPerPixel':
		return piexif.ExifIFD.CompressedBitsPerPixel
	elif key == 'Contrast':
		return piexif.ExifIFD.Contrast
	elif key == 'CustomRendered':
		return piexif.ExifIFD.CustomRendered
	elif key == 'DateTimeDigitized':
		return piexif.ExifIFD.DateTimeDigitized
	elif key == 'DateTimeOriginal':
		return piexif.ExifIFD.DateTimeOriginal
	elif key == 'DeviceSettingDescription':
		return piexif.ExifIFD.DeviceSettingDescription
	elif key == 'DigitalZoomRatio':
		return piexif.ExifIFD.DigitalZoomRatio
	#elif key == 'ExifOffset':
	#	return piexif.ExifIFD.OffsetTime
	elif key == 'ExifVersion':
		return piexif.ExifIFD.ExifVersion
	elif key == 'ExposureBiasValue':
		return piexif.ExifIFD.ExposureBiasValue
	elif key == 'ExposureIndex':
		return piexif.ExifIFD.ExposureIndex
	elif key == 'ExposureMode':
		return piexif.ExifIFD.ExposureMode
	elif key == 'ExposureProgram':
		return piexif.ExifIFD.ExposureProgram
	elif key == 'ExposureTime':
		return piexif.ImageIFD.ExposureTime
	elif key == 'FNumber':
		return piexif.ExifIFD.FNumber
	elif key == 'FileSource':
		return piexif.ExifIFD.FileSource
	elif key == 'Flash':
		return piexif.ExifIFD.Flash
	elif key == 'FlashEnergy':
		return piexif.ImageIFD.FlashEnergy
	elif key == 'FlashPixVersion':
		return piexif.ExifIFD.FlashpixVersion
	elif key == 'FocalLength':
		return piexif.ExifIFD.FocalLength
	elif key == 'FocalLengthIn35mmFilm':
		return piexif.ExifIFD.FocalLengthIn35mmFilm
	elif key == 'FocalPlaneResolutionUnit':
		return piexif.ExifIFD.FocalPlaneResolutionUnit
	elif key == 'FocalPlaneXResolution':
		return piexif.ImageIFD.FocalPlaneXResolution
	elif key == 'FocalPlaneYResolution':
		return piexif.ImageIFD.FocalPlaneYResolution
	elif key == 'GainControl':
		return piexif.ExifIFD.GainControl
	elif key == 'Gamma':
		return piexif.ExifIFD.Gamma
	elif key == 'Humidity':
		return piexif.ExifIFD.Humidity
	elif key == 'ISOSpeed':
		return piexif.ExifIFD.ISOSpeed
	elif key == 'ISOSpeedLatitudeyyy':
		return piexif.ExifIFD.ISOSpeedLatitudeyyy
	elif key == 'ISOSpeedLatitudezzz':
		return piexif.ExifIFD.ISOSpeedLatitudezzz
	elif key == 'ISOSpeedRatings':
		return piexif.ExifIFD.ISOSpeedRatings
	elif key == 'ImageUniqueID':
		return piexif.ExifIFD.ImageUniqueID
	elif key == 'InteroperabilityTag':
		return piexif.ExifIFD.InteroperabilityTag
	elif key == 'Make':
		return piexif.ExifIFD.LensMake
	elif key == 'Model':
		return piexif.ExifIFD.LensModel
	elif key == 'LensMake':
		return piexif.ExifIFD.LensMake
	elif key == 'LensModel':
		return piexif.ExifIFD.LensModel
	elif key == 'LensSerialNumber':
		return piexif.ExifIFD.LensSerialNumber
	elif key == 'LensSpecification':
		return piexif.ExifIFD.LensSpecification
	elif key == 'LightSource':
		return piexif.ExifIFD.LightSource
	elif key == 'MakerNote':
		return piexif.ExifIFD.MakerNote
	elif key == 'MaxApertureValue':
		return piexif.ExifIFD.MaxApertureValue
	elif key == 'MeteringMode':
		return piexif.ExifIFD.MeteringMode
	elif key == 'OECF':
		return piexif.ExifIFD.OECF
	elif key == 'OffsetTime':
		return piexif.ExifIFD.OffsetTime
	elif key == 'OffsetTimeDigitized':
		return piexif.ExifIFD.OffsetTimeDigitized
	elif key == 'OffsetTimeOriginal':
		return piexif.ExifIFD.OffsetTimeOriginal
	elif key == 'PixelXDimension':
		return piexif.ExifIFD.PixelXDimension
	elif key == 'PixelYDimension':
		return piexif.ExifIFD.PixelYDimension
	elif key == 'Pressure':
		return piexif.ExifIFD.Pressure
	elif key == 'RecommendedExposureIndex':
		return piexif.ExifIFD.RecommendedExposureIndex
	elif key == 'RelatedSoundFile':
		return piexif.ExifIFD.RelatedSoundFile
	elif key == 'Saturation':
		return piexif.ExifIFD.Saturation
	elif key == 'SceneCaptureType':
		return piexif.ExifIFD.SceneCaptureType
	elif key == 'SceneType':
		return piexif.ExifIFD.SceneType
	elif key == 'SensingMethod':
		return piexif.ExifIFD.SensingMethod
	elif key == 'SensitivityType':
		return piexif.ExifIFD.SensitivityType
	elif key == 'Sharpness':
		return piexif.ExifIFD.Sharpness
	elif key == 'ShutterSpeedValue':
		return piexif.ExifIFD.ShutterSpeedValue
	elif key == 'SpatialFrequencyResponse':
		return piexif.ExifIFD.SpatialFrequencyResponse
	elif key == 'SpectralSensitivity':
		return piexif.ExifIFD.SpectralSensitivity
	elif key == 'StandardOutputSensitivity':
		return piexif.ExifIFD.StandardOutputSensitivity
	elif key == 'SubsecTime':
		return piexif.ExifIFD.SubSecTime
	elif key == 'SubsecTimeDigitized':
		return piexif.ExifIFD.SubSecTimeDigitized
	elif key == 'SubsecTimeOriginal':
		return piexif.ExifIFD.SubSecTimeOriginal
	elif key == 'SubjectArea':
		return piexif.ExifIFD.SubjectArea
	elif key == 'SubjectDistance':
		return piexif.ExifIFD.SubjectDistance
	elif key == 'SubjectDistanceRange':
		return piexif.ExifIFD.SubjectDistanceRange
	elif key == 'SubjectLocation':
		return piexif.ExifIFD.SubjectLocation
	elif key == 'Temperature':
		return piexif.ExifIFD.Temperature
	elif key == 'UserComment':
		return piexif.ExifIFD.UserComment
	elif key == 'WaterDepth':
		return piexif.ExifIFD.WaterDepth
	elif key == 'WhiteBalance':
		return piexif.ExifIFD.WhiteBalance
